"use client";
import DemoPiechat from "./DemoPiechat";
import Status from "./Status";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./PureComponentChart"), { ssr: false });

const DashboardPage = () => {
  return (
    <div className="w-full px-2 lg:px-6">
      <h1 className="text-left text-[20px] font-semibold pb-2">Dashboard</h1>
      <Status />
      <div className="w-full h-[60vh] py-7 flex flex-col gap-4 md:flex-row justify-between items-center">
        {/* Left Column: Chart */}
        <div className="w-full lg:w-[74%] bg-[#EEF9FE] rounded-md p-5">
          <Chart />
        </div>
        
        {/* Right Column: Pie Chart */}
        <div className="w-full lg:w-[24%]">
          <DemoPiechat />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
