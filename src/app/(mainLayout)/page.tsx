import HeroBannerSection from "@/components/Pages/Home/HeroBannerSection";
import ProductCategories from "@/components/Pages/Home/ProductCategories";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <HeroBannerSection />
      <div className="py-[60px] md:py-[120px]">
        <ProductCategories />
      </div>
    </section>
  );
};

export default HomePage;
