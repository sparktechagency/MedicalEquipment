import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";
import React from "react";

const userDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="">
      <div className="md:container pt-[60px]">
        <div className="pt-2">
          <Header />
        </div>
        <div className="relative w-full md:grid grid-cols-12  md:px-0 lg:grid-cols-12 md:grid-cols-11 py-8 md:space-x-32 lg:space-x-28 xl:space-x-14">
          {/* Sidebar (only absolute on mobile screens) */}
          <div className="absolute md:static col-span-1 md:col-span-2 lg:col-span-2 px-2">
            <Sidebar />
          </div>

          {/* Main content */}
          <div className="top-2 col-span-11 md:col-span-9 lg:col-span-10 md:px-2 px-5">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};
export default userDashboard;
