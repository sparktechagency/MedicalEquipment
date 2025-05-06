import BecomeSeller from "@/components/Pages/Home/BecomeSeller";
import HeroBannerSection from "@/components/Pages/Home/HeroBannerSection";
import ProductCategories from "@/components/Pages/Home/ProductCategories";
import TopPickedAuctions from "@/components/Pages/Home/TopPickedAuctions";
import TrustedbyProfessionalsWorldwide from "@/components/Pages/Home/TrustedbyProfessionalsWorldwide";
import UpcomingAuctions from "@/components/Pages/Home/UpcomingAuctions";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <HeroBannerSection />
      <div className="pt-[60px] md:pt-[120px]">
        <ProductCategories />
      </div>
      <div className="pt-[60px] md:pt-[120px]">
        <TrustedbyProfessionalsWorldwide />
      </div>
      <div className="pt-[60px] md:pt-[120px]">
        <TopPickedAuctions />
      </div>
      <div className="pt-[60px] md:pt-[120px]">
        <BecomeSeller />
      </div>
      <div className="pt-[60px] md:pt-[120px]">
        <UpcomingAuctions />
      </div>
    </section>
  );
};

export default HomePage;
