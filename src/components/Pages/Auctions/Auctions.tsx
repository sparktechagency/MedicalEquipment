"use client";

import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Using Heroicons for icons

const Auctions = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle search logic here
  };

  const showDrawer = () => {
    setIsSidebarOpen(true);
  };

  const closeDrawer = () => {
    setIsSidebarOpen(false);
  };

  const [activeTab, setActiveTab] = useState("all"); // Track the active tab
  const [sortOption, setSortOption] = useState("auction-time"); // Track the selected sort option

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const categories = [
    {
      name: "Diagnostic Equipment",
    },
    {
      name: "Imaging Devices",
    },
    {
      name: "Surgical Instruments",
    },
    {
      name: "Patient Monitoring",
    },
  ];

  return (
    <section className="w-full md:container mx-auto mt-2">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
        {/* Sidebar - Always visible on desktop */}
        <aside className="hidden md:block  pr-4">
          <h2 className="text-sm text-gray-600 ">
            Home &gt;
            <span className="text-[#48B1DB] font-semibold ml-1 ">
              Collectible Products
            </span>
          </h2>
          <h1 className="text-xl font-bold py-3 ">Collectible Products</h1>
          <p className="text-base ">All Categories</p>

          <ul className="my-4 bg-[#EEF9FE] p-5">
            {categories.map((item, index) => (
              <li key={index} className="py-2">
                {item.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Sidebar Drawer - Only on Mobile */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex md:hidden">
            <div className="bg-white w-2/4 max-w-sm p-4 shadow-lg h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-bold">Categories</h1>
                <button className="text-gray-500" onClick={closeDrawer}>
                  <XIcon className="h-6 w-6" />
                </button>
              </div>
              <h2 className="text-sm text-gray-600">
                Home &gt;
                <span className="text-[#48B1DB] font-semibold">
                  Collectible Products
                </span>
              </h2>
              <h1 className="font-bold py-3">Collectible Products</h1>
              <p className="text-base">All Categories</p>

              <ul className="my-4 bg-[#EEF9FE]">
                {categories.map((item, index) => (
                  <li key={index} className="py-2">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1" onClick={closeDrawer}></div>
          </div>
        )}

        {/* Main Content with Search */}
        <div className="w-full">
          <div className="flex items-center justify-between">
            {/* Mobile Hamburger Button */}
            <button className="md:hidden text-gray-500" onClick={showDrawer}>
              <MenuIcon className="h-6 w-6" />
            </button>
            <form
              onSubmit={handleSearch}
              className="w-full flex justify-end items-center px-2 md:px-0"
            >
              <input
                name="search"
                type="search"
                placeholder="Search your products here..."
                className="border-2 border-[#48B1DB] bg-[#EEF9FE] rounded-md px-4 py-2 w-full md:w-[330px]"
              />
              <button
                type="submit"
                className="bg-[#EEF9FE] text-[#48B1DB] rounded-md px-1 md:px-4 py-2 border-2 border-[#48B1DB] ml-1"
              >
                Search
              </button>
            </form>
          </div>
          <div>
            <div className="flex items-center justify-between p-2 md:p-4 border-b border-[#E5F6FD]">
              {/* Tabs */}
              <div className="flex space-x-4">
                <button
                  onClick={() => handleTabClick("all")}
                  className={`px-2 py-2 text-sm font-semibold rounded-lg ${
                    activeTab === "all"
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  All Listings
                </button>
                <button
                  onClick={() => handleTabClick("auction")}
                  className={`px-2 py-2 text-sm font-semibold rounded-lg ${
                    activeTab === "auction"
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  Auction
                </button>
              </div>

              {/* Sorting Option */}
              <div className="flex items-center space-x-2">
                {/* <span className="">20 results</span> */}
                <select
                  value={sortOption}
                  onChange={handleSortChange}
                  className="text-sm border border-blue-300 rounded-md px-1 py-2 focus:outline-none"
                >
                  <option value="auction-time">Sort Action</option>
                  <option value="price-high-to-low">
                     (High to Low)
                  </option>
                  <option value="price-low-to-high">
                    
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auctions;
