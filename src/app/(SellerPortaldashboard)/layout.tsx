import HeaderSellerPortal from "@/components/SellerPortaldashboard/HeaderSellerPortal/HeaderSellerPortal";
import SidebarSellerPortal from "@/components/SellerPortaldashboard/SidebarSellerPortal/SidebarSellerPortal";
import React from "react";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full min-h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar - Fixed on medium and larger screens */}
        <div
          className="md:w-[250px] w-full md:fixed md:top-0 md:left-0 md:h-screen bg-white z-10"
        >
          <SidebarSellerPortal />
        </div>

        {/* Main content area */}
        <div className="w-full md:ml-[250px] md:w-[calc(100%-250px)]">
          <HeaderSellerPortal />
          <div className="p-2 md:p-4">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
