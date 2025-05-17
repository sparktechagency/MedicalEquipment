"use client";
import Image from "next/image";
import { useState } from "react";

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

const TopPickedAuctions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 8; // 4 items per slide (2 rows x 2 columns)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= data.length ? 0 : prevIndex + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - itemsPerSlide : prevIndex - itemsPerSlide
    );
  };

  // Group items into slides of 4
  const slides = [];
  for (let i = 0; i < data.length; i += itemsPerSlide) {
    slides.push(data.slice(i, i + itemsPerSlide));
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
                {slide.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-b from-[#EEF9FE] to-white rounded-md p-2"
                  >
                    <Image
                      width={300}
                      height={250}
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-40 md:h-52  object-cover rounded-md p-1"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-gray-600">{item.location}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-xl text-blue-600">{item.price}</p>
                        <p className="text-sm text-gray-500">{item.bids}</p>
                      </div>
                      <p className="text-sm text-gray-500">
                        {item.timeRemaining}
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
