import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div className="pb-[79px] bg-[#FBE9E980]">
        <Header />
      </div>
      {children}
      <Footer />
    </section>
  );
};

export default MainLayout;
