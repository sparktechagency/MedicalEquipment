"use client";
import Image from "next/image";
import ProductCategories from "@/assets/banner/ProductCategories.png";

const ProductCategoriesPage = () => {
  return (
    <div className="w-full relative h-[685px] ">
      {/* Top text (above the image visually) */}
      <div className=" z-10 md:container mx-auto py-8 px-4 h-[685px]">
         
      </div>

      {/* Background image (behind text) */}
      <div className="absolute inset-0 z-0 h-full">
        <Image
          src={ProductCategories}
          alt="Product Categories Banner"
          layout="fill"
          objectFit="cover"
          className="opacity-30 md:px-40 h-full -mr-80 md:pr-10"
        />
      </div>
    </div>
  );
};

export default ProductCategoriesPage;
