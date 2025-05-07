/* eslint-disable react/no-unescaped-entities */
"use client";
import TrustedbyProfessionals from "@/assets/banner/TrustedbyProfessionals.png";

// Import icons for the product categories
import icon1 from "@/assets/TrustedbyProfessionalsWorldwide/Group.png";
import icon2 from "@/assets/TrustedbyProfessionalsWorldwide/Group (1).png";
import icon3 from "@/assets/TrustedbyProfessionalsWorldwide/Group (2).png";
import icon4 from "@/assets/TrustedbyProfessionalsWorldwide/Frame.png";
import Image from "next/image";

const TrustedbyProfessionalsWorldwide = () => {
  // Icons array with imported images
  const icons = [
    { icon: icon1, label: "Medical Equipment", amunt: "12,500+" },
    { icon: icon2, label: "Total Sales ", amunt: "$2.4M+" },
    { icon: icon3, label: " Verified Sellers", amunt: "1,300+" },
    { icon: icon4, label: " Countries Served", amunt: "15+" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#ffffff99] via-[#99dfff88] to-[#99dfff88]">
      <h1 className="text-xl sm:text-3xl md:text-5xl font-bold px-3 md:px-0 text-center">
        <span className="text-[#48B1DB] font-bold">Trusted</span> by Professionals Worldwide
      </h1>
      <p className="text-center px-3 md:px-0 mt-2 sm:text-base md:text-lg">
        Our platform connects thousands of buyers and sellers in the medical industry. <br /> 
        Here's a look at the impact we've made so far.
      </p>
      <div className="relative w-full h-[100%] md:h-[450px]">
        {/* Top text (above the image visually) */}
        <div className="z-10 md:container mx-auto mt-10">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 lg:gap-10 xl:gap-15">
              {icons.map((item, index) => (
                <div key={index} className="mx-auto md:mt-2 lg:mt-36">
                  <Image
                    key={index}
                    src={item.icon}
                    alt={`Product category icon ${index + 1}`}
                    width={90}
                    height={90}
                    objectFit="contain"
                    className="object-cover mx-auto"
                  />
                  <h2 className="text-[#48B1DB] text-center font-extrabold text-3xl sm:text-4xl lg:text-[64px] mt-3">
                    {item.amunt}
                  </h2>
                  <h2 className="text-center font-semibold text-[16px] sm:text-[18px] lg:text-[20px] mt-7">
                    {item.label}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background image (behind text) */}
        <div className="absolute inset-0 z-0">
          <Image
            src={TrustedbyProfessionals}
            alt="Product Categories Background Banner"
            layout="fill"
            objectFit="cover"
            className="opacity-50 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedbyProfessionalsWorldwide;

