"use client";
import Image from "next/image";
import { useState } from "react";

import UpcomingImage from "@/assets/banner/UpcomingImage.png";

// Debug: Log the imported image to verify it’s loading correctly
console.log("Imported UpcomingImage:", UpcomingImage);

const data = [
    {
      id: 1,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
    {
      id: 2,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
    {
      id: 3,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
    {
      id: 4,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
    {
      id: 5,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
    {
      id: 6,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
    {
      id: 7,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
    {
      id: 8,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
    {
      id: 9,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
    {
      id: 10,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
    {
      id: 11,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
    {
      id: 12,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
    {
      id: 13,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
    {
      id: 14,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
    {
      id: 15,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
    {
      id: 16,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
    },
  ];

const UpcomingAuctions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + itemsPerSlide;
      return nextIndex >= data.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexCalc = prevIndex - itemsPerSlide;
      return prevIndexCalc < 0
        ? Math.max(0, data.length - itemsPerSlide)
        : prevIndexCalc;
    });
  };

  const slides = [];
  for (let i = 0; i < data.length; i += itemsPerSlide) {
    slides.push(data.slice(i, i + itemsPerSlide));
  }

  return (
    <div
      className="md:container w-full min-h-[400px] md:min-h-[564px] py-4 md:py-10 border-y-2 border-[#48b1db65]"
      style={{
        backgroundImage: `url(${UpcomingImage.src})`,
        backgroundSize: "cover", // Changed for better scaling of background
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-lg md:text-4xl font-bold text-gray-800 mx-4 md:mx-8 lg:mx-12">
          Upcoming <span className="text-[#48B1DB] font-bold">Auctions</span>
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{
            transform: `translateX(-${(currentIndex / itemsPerSlide) * 100}%)`,
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="flex-none w-full min-w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 mx-4">
                {slide.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#FFFFFF] rounded-md shadow-md mx-auto w-full max-w-[350px] md:max-w-[400px]"
                  >
                    <Image
                      width={300}
                      height={250}
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-40 md:h-52 object-cover rounded-md p-1"
                      onError={() =>
                        console.log(`Failed to load image: ${item.imageUrl}`)
                      }
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-base md:text-lg truncate">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {item.location}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-lg md:text-xl text-blue-600">
                          {item.price}
                        </p>
                        <p className="text-xs md:text-sm text-gray-500">
                          {item.bids}
                        </p>
                      </div>
                      <p className="text-xs md:text-sm text-gray-500 mt-1">
                        {item.timeRemaining}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute -left-0  border border-[#48b1db65] rounded-full top-1/2 transform -translate-y-1/2 bg-[#EEF9FE] text-[#48B1DB] p-2 z-[9999] disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          ❮
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute -right-0  border border-[#48b1db65] rounded-full top-1/2 transform -translate-y-1/2 bg-[#EEF9FE] text-[#48B1DB] p-3 z-[9999] disabled:opacity-50"
          disabled={currentIndex >= data.length - itemsPerSlide}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default UpcomingAuctions;
