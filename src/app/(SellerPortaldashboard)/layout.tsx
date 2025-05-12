import HeaderSellerPortal from "@/components/SellerPortaldashboard/HeaderSellerPortal/HeaderSellerPortal";
import SidebarSellerPortal from "@/components/SellerPortaldashboard/SidebarSellerPortal/SidebarSellerPortal";
import React from "react";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full">
      <div className="md:flex">
        {/* Sidebar with fixed width */}
        <div className="md:w-[300px] w-full "> {/* Fixed width on larger screens */}
          <SidebarSellerPortal />
        </div>

        {/* Main content area */}
        <div className="md:w-[calc(100%-30px)] w-full"> {/* Remaining width */}
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
