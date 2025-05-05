"use client";
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    id: 1,
    name: "GE Vivid S70 Ultrasound Machine",
    location: "New York",
    price: "$200",
    imageUrl: "https://i.ibb.co/com/bjzn3zKW/Rectangle-3.png",
    timeRemaining: "2 days 4 hours 5 min",
  },
  {
    id: 2,
    name: "GE Vivid S70 Ultrasound Machine",
    location: "New York",
    price: "$200",
    imageUrl: "https://i.ibb.co/com/bjzn3zKW/Rectangle-3.png",
    timeRemaining: "2 days 4 hours 5 min",
  },
  {
    id: 3,
    name: "GE Vivid S70 Ultrasound Machine",
    location: "New York",
    price: "$200",
    imageUrl: "https://i.ibb.co/com/bjzn3zKW/Rectangle-3.png",
    timeRemaining: "2 days 4 hours 5 min",
  },
  {
    id: 4,
    name: "GE Vivid S70 Ultrasound Machine",
    location: "Los Angeles",
    price: "$250",
    imageUrl: "https://i.ibb.co/com/bjzn3zKW/Rectangle-3.png",
    timeRemaining: "1 day 12 hours 30 min",
  },
  {
    id: 5,
    name: "GE Vivid S70 Ultrasound Machine",
    location: "Chicago",
    price: "$220",
    imageUrl: "https://i.ibb.co/com/bjzn3zKW/Rectangle-3.png",
    timeRemaining: "3 days 5 hours 15 min",
  },
  {
    id: 6,
    name: "GE Vivid S70 Ultrasound Machine",
    location: "San Francisco",
    price: "$210",
    imageUrl: "https://i.ibb.co/com/bjzn3zKW/Rectangle-3.png",
    timeRemaining: "1 day 8 hours 50 min",
  },
  {
    id: 7,
    name: "GE Vivid S70 Ultrasound Machine",
    location: "Houston",
    price: "$230",
    imageUrl: "https://i.ibb.co/com/bjzn3zKW/Rectangle-3.png",
    timeRemaining: "4 days 2 hours 20 min",
  },
  {
    id: 8,
    name: "GE Vivid S70 Ultrasound Machine",
    location: "Dallas",
    price: "$240",
    imageUrl: "https://i.ibb.co/com/bjzn3zKW/Rectangle-3.png",
    timeRemaining: "2 days 6 hours 10 min",
  },
];

const TopPickedAuctions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (data.length - 3)); // Wrap to start after last item
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    ); // Wrap to last if at first
  };

  return (
    <div className="w-full md:container mx-auto px-4">
      <h2 className="text-xl md:text-[40px] font-bold text-gray-800 mb-4">
        Top-Picked <span className="text-[#48B1DB] font-bold">Auctions</span>
      </h2>

      {/* Carousel for Top 4 Auctions */}
      <div className="relative">
        <div className="flex justify-between overflow-hidden space-x-4">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-48 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {data.slice(currentIndex, currentIndex + 2 ).map((item) => (
              <div
                key={item.id}
                className="p-4 bg-white shadow-lg rounded-lg w-full"
              >
                <Image
                  width={100}
                  height={100}
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600">{item.location}</p>
                <p className="text-xl text-blue-600">{item.price}</p>
                <p className="text-sm text-gray-500">{item.timeRemaining}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons for Carousel */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#EEF9FE] text-[#48B1DB] p-5 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#EEF9FE] text-[#48B1DB] p-5 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default TopPickedAuctions;

