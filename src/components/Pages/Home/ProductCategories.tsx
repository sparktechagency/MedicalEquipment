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
    { icon: icon1 },
    { icon: icon2 },
    { icon: icon3 },
    { icon: icon4 },
    { icon: icon5 },
  ];

  return (
    <div className="w-full relative h-[685px]">
      {/* Top text (above the image visually) */}
      <div className="z-10 md:container mx-auto py-8 px-4 h-[685px]">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[40px]">
          Product <span className="text-[#48B1DB] font-bold">Categories</span>
        </h1>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {icons.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.icon}
                  alt={`Product category icon ${index + 1}`}
                  width={100}
                  height={100}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full md:w-[300px] md:h-[305px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background image (behind text) */}
      <div className="absolute inset-0 z-0 h-full">
        <Image
          src={ProductCategoriesImage}
          alt="Product Categories Background Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-10 md:px-40 h-full -mr-80 md:pr-10"
          priority
        />
      </div>
    </div>
  );
};

export default ProductCategories;
