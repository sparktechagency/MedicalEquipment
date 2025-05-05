

"use client";
import ProductCategoriesImage from "@/assets/banner/ProductCategories.png";

// Import icons for the product categories
import icon1 from "@/assets/ProductCategories/Frame7.png";
import icon2 from "@/assets/ProductCategories/Frame9.png";
import icon3 from "@/assets/ProductCategories/Frame11.png";
import icon4 from "@/assets/ProductCategories/Frame13.png";
import icon5 from "@/assets/ProductCategories/Frame14.png";
import Image from "next/image";

const ProductCategories = () => {
  // Icons array with imported images
  const icons = [
    { icon: icon1, label: "Diagnostic Equipment" },
    { icon: icon2, label: "Imaging Devices" },
    { icon: icon3, label: "Surgical Instruments" },
    { icon: icon4, label: "Patient Monitoring" },
    { icon: icon5, label: "Patient Monitoring" },
  ];

  return (
    <div className="relative w-full h-[100%] md:h-[600px]">
      {/* Top text (above the image visually) */}
      <div className="z-10 md:container mx-auto  ">
        <h1 className="text-xl md:text-5xl font-bold mb-[50px] md:mb-[130px] px-3 md:px-0">
          Product <span className="text-[#48B1DB] font-bold">Categories</span>
        </h1>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {icons.map((item, index) => (
              <Image
                key={index}
                src={item.icon}
                alt={`Product category icon ${index + 1}`}
                width={305}
                height={305}
                objectFit="contain"
                className="object-cover "
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background image (behind text) */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src={ProductCategoriesImage}
          alt="Product Categories Background Banner"
          layout="fill"
          objectFit="Devices"
          className="opacity-10 w-[80%] h-full p-5 md:pl-20"
        />
      </div>
    </div>
  );
};

export default ProductCategories;
