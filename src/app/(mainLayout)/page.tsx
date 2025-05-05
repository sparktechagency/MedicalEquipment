import HeroBannerSection from "@/components/Pages/Home/HeroBannerSection";
import ProductCategories from "@/components/Pages/Home/ProductCategories";
import TrustedbyProfessionalsWorldwide from "@/components/Pages/Home/TrustedbyProfessionalsWorldwide";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <HeroBannerSection />
      <div className="py-[60px] md:py-[120px]">
        <ProductCategories />
      </div>

      <div className="pb-[60px] md:pb-[60px]">
        <TrustedbyProfessionalsWorldwide />
      </div>
    </section>
  );
};

export default HomePage;
