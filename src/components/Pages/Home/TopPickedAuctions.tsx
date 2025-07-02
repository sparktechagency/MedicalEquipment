/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetTopPickedAllQuery } from "@/redux/features/UpcomingAuctions/UpcomingAuctions";
import Image from "next/image";
import { useState } from "react";


const TopPickedAuctions = () => {

  const { data } = useGetTopPickedAllQuery({});
  const AllData = data?.data?.attributes || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 8; 

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= AllData.length ? 0 : prevIndex + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? AllData.length - itemsPerSlide : prevIndex - itemsPerSlide
    );
  };

  // Group items into slides of 4
  const slides = [];
  for (let i = 0; i < AllData.length; i += itemsPerSlide) {
    slides.push(AllData.slice(i, i + itemsPerSlide));
  }

  return (
    <div className="w-full md:container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-[40px] font-bold text-gray-800">
          Top-Picked <span className="text-[#48B1DB] font-bold">Auctions</span>
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="bg-[#EEF9FE] text-[#48B1DB] p-2 px-5 rounded-md"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#EEF9FE] text-[#48B1DB] p-2 px-5 rounded-md"
          >
            ❯
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / itemsPerSlide) * 100}%)`,
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="flex-none w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {slide.map((item: any) => (
                <div
                  key={item._id}
                  className="bg-gradient-to-b from-[#EEF9FE] to-white rounded-md p-2"
                >
                  <Image
                    width={300}
                    height={250}
                    src={
                      item.images && item.images.length > 0
                        ? `${process.env.NEXT_PUBLIC_BASE_URL}/${item.images[0]}`
                        : ""
                    }
                    alt={item.title}
                    className="w-full h-40 md:h-56  rounded-md p-1"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.author?.address}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xl text-blue-600">${item.price}</p>
                      <p className="text-sm text-gray-500">{item.totalBid} bids</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPickedAuctions;
