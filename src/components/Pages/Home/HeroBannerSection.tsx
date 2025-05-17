"use client";
import { useEffect, useState } from "react";
import Variant1 from "@/assets/HeroBannerSection/Variant1.png"; // imported image
import Variant2 from "@/assets/HeroBannerSection/Variant2.png"; // imported image
import Variant3 from "@/assets/HeroBannerSection/Variant3.png"; // imported image
import Variant4 from "@/assets/HeroBannerSection/Variant4.png"; // imported image

const HeroBannerSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [Variant1, Variant2, Variant3, Variant4];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="w-full mt-2">
      <div className="relative w-full min-h-[85vh] overflow-hidden">
        {items.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${src.src})` }}
          >
            <div className="md:container mx-auto flex justify-start items-center h-full">
              <div className="w-full md:w-[60%] lg:w-[50%]  p-4 md:p-0 rounded-md">
                <h1 className="text-xl  font-light text-white leading-tight md:text-2xl lg:text-3xl">
                  <span className="font-bold md:text-4xl lg:text-5xl">
                    Empowering
                  </span>{" "}
                  Healthcare with the Right Equipment,
                  <span className="font-bold md:text-4xl lg:text-5xl">
                    Right Where It Matters Most
                  </span>
                </h1>
                <p className="text-white text-sm md:text-base pt-4 pb-6">
                  Trusted platform for hospitals, labs, and individuals to trade
                  medical devices securely.
                </p>
                <button className="bg-white text-black font-semibold p-5 rounded-md hover:bg-gray-100 transition mt-5">
                  Sell Your Equipment
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {items.map((_, btnIndex) => (
            <button
              key={btnIndex}
              onClick={() => setActiveIndex(btnIndex)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full border ${
                btnIndex === activeIndex ? "bg-black" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBannerSection;
