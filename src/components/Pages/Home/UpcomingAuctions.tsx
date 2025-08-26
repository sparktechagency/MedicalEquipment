/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { useState } from "react";

import UpcomingImage from "@/assets/banner/UpcomingImage.png";
import { useGetProductAllQuery } from "@/redux/features/ProductManagement/ProductManagement";

const UpcomingAuctions = () => {
  const { data, } = useGetProductAllQuery({});
  const allData = data?.data?.attributes || []; 
  console.log(allData);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerSlide;
      return nextIndex >= allData.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexCalc = prevIndex - itemsPerSlide;
      return prevIndexCalc < 0
        ? Math.max(0, allData.length - itemsPerSlide)
        : prevIndexCalc;
    });
  };

  const slides = [];
  for (let i = 0; i < allData.length; i += itemsPerSlide) {
    slides.push(allData.slice(i, i + itemsPerSlide));
  }


  return (
    <div
      className="md:container w-full min-h-[400px] md:min-h-[564px] py-4 md:py-10 border-y-2 border-[#48b1db65]"
      style={{
        backgroundImage: `url(${UpcomingImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
      }}
    >
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-lg md:text-4xl font-bold text-gray-800 mx-4 md:mx-8 lg:mx-12">
          Upcoming <span className="text-[#48B1DB] font-bold">Auctions</span>
        </h2>
      </div>

      <div className="relative overflow-hidden  md:mt-4">
        {slides.length === 0 ? (
          <div className="text-center text-gray-600">No auctions available</div>
        ) : (
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{
              transform: `translateX(-${(currentIndex / itemsPerSlide) * 100}%)`,
            }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="flex-none w-full min-w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 mx-4">
                  {slide.map((item: any) => (                    
                    <div
                      key={item.id}
                      className="bg-[#FFFFFF] rounded-md shadow-md mx-auto w-full max-w-[350px] md:max-w-[400px]"
                    >
                      <Image
                        width={300}
                        height={250}
                        src={item.images ? `${item.images[0]}` : ""}
                        alt={item.name || "Auction Item"}
                        className="w-full h-40 md:h-56  rounded-md p-1"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-base md:text-lg truncate">
                          {item.title }
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base">
                          {item.description.split(' ').slice(0, 5).join(' ')}
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-lg md:text-xl ">
                          price <span className="text-blue-600">${item.price}</span>
                          </p>                         
                        </div>
                        <p className="text-xs md:text-sm text-gray-500 mt-1">
                         {item.author?.address }
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute -left-0 border border-[#48b1db65] rounded-full top-1/2 transform -mt-4 -translate-y-1/2 bg-[#EEF9FE] text-[#48B1DB] p-2 z-[9999] disabled:opacity-50"
          disabled={currentIndex === 0 || slides.length === 0}
        >
          ❮
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute -right-0 border border-[#48b1db65] rounded-full top-1/2 transform -translate-y-1/2 bg-[#EEF9FE] text-[#48B1DB] p-2 md:-mt-4 z-[esin-out disabled:opacity-50"
          disabled={currentIndex >= allData.length - itemsPerSlide || slides.length === 0}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default UpcomingAuctions;