"use client";

import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Using Heroicons for icons
import Image from "next/image";
import PaginationComponent from "@/components/UI/PaginationComponent"; // Import the Pagination component
import Link from "next/link";

const Auctions = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [activeTab, setActiveTab] = useState("all"); // Track the active tab
  const [sortOption, setSortOption] = useState("auction-time"); // Track the selected sort option
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Track selected category

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Set the number of items per page

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const categories = [
    { name: "Diagnostic Equipment" },
    { name: "Imaging Devices" },
    { name: "Surgical Instruments" },
    { name: "Patient Monitoring" },
    { name: "Therapeutic Devices" },
    { name: "Laboratory Equipment" },
    { name: "Medical Consumables" },
    { name: "Rehabilitation Equipment" },
    { name: "Anesthesia Equipment" },
    { name: "Sterilization Equipment" },
  ];

  const data = [
    {
      id: 1,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Patient Monitoring",
      type: "auction", // Added type
    },
    {
      id: 2,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Surgical Instruments",
      type: "auction", // Added type
    },
    {
      id: 3,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Imaging Devices",
      type: "auction", // Added type
    },
    {
      id: 4,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Imaging Devices",
      type: "auction", // Added type
    },
    {
      id: 5,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Diagnostic Equipment",
      type: "auction", // Added type
    },
    {
      id: 6,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Imaging Devices",
      type: "auction", // Added type
    },
    {
      id: 7,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Diagnostic Equipment",
      type: "auction", // Added type
    },
    {
      id: 8,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Diagnostic Equipment",
      type: "auction", // Added type
    },
    {
      id: 9,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Patient Monitoring",
      type: "auction", // Added type
    },
    {
      id: 10,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Patient Monitoring",
      type: "auction", // Added type
    },
    {
      id: 11,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Surgical Instruments",
      type: "auction", // Added type
    },
    {
      id: 12,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Surgical Instruments",
      type: "auction", // Added type
    },
    {
      id: 13,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Surgical Instruments",
      type: "auction", // Added type
    },
    {
      id: 14,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Surgical Instruments",
      type: "auction", // Added type
    },
    {
      id: 15,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Imaging Devices",
      type: "auction", // Added type
    },
    {
      id: 16,
      name: "GE Vivid S70 Ultrasound Machine",
      location: "New York",
      price: "$200",
      imageUrl: "https://i.ibb.co.com/bjzn3zKW/Rectangle-3.png",
      timeRemaining: "2 days 4 hours 5 min",
      bids: "2 Bids",
      Categories: "Imaging Devices",
      type: "auction", // Added type
    },
  ];

  // Filter data based on search, category, and tab
  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !selectedCategory || item.Categories === selectedCategory;

    const matchesTab =
      activeTab === "all" ||
      (activeTab === "auction" && item.type === "auction");

    return matchesSearch && matchesCategory && matchesTab;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Paginate the data based on currentPage
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function showDrawer(event: any) {
    setIsSidebarOpen(true);
  }

  function handleSearch(event: any) {
    event.preventDefault();
    // Reset to the first page when a new search is performed
    setCurrentPage(1);
    console.log("Search query:", searchQuery);
    // Additional logic for handling search can be added here
  }

  return (
    <section className="w-full md:container mx-auto mt-2">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
        {/* Sidebar - Always visible on desktop */}
        <aside className="hidden md:block pr-4">
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
              <li
                key={index}
                className="py-2 cursor-pointer"
                onClick={() => setSelectedCategory(item.name)}
              >
                <span
                  className={`${
                    selectedCategory === item.name
                      ? "font-semibold text-[#48B1DB]"
                      : "text-gray-600"
                  }`}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content with Search */}
        <div className="w-full">
          <div className="flex items-center justify-between px-2 md:px-0">
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

          {/* Tabs and Sorting Options */}
          <div>
            <div className="flex items-center justify-between py-4 border-b border-[#E5F6FD] px-2 md:px-0">
              {/* Tabs */}
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-2 py-2 text-sm font-semibold rounded-lg ${
                    activeTab === "all"
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  All Listings
                </button>
                <button
                  onClick={() => setActiveTab("auction")}
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
              <div className="flex items-center  space-x-2">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="text-sm border border-blue-300 rounded-md  py-2 focus:outline-none"
                >
                  <option value="auction-time">Sort Action</option>
                  <option value="price-high-to-low">(High to Low)</option>
                  <option value="price-low-to-high">(Low to High)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Display filtered items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 mt-2 px-2 md:px-0">
            {currentItems.map((item: any) => (
              <Link href={`/Auctions/${item.id}`} key={item.id}>
                {" "}
                {/* Add Link to navigate to dynamic page */}
                <div className="bg-[#FFFFFF] rounded-md shadow-md mx-auto w-full max-w-[350px] md:max-w-[400px]">
                  <Image
                    width={300}
                    height={250}
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-40 md:h-52 object-cover rounded-md p-1"
                    onError={() =>
                      console.log(`Failed to load image: ${item.imageUrl}`)
                    }
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-base md:text-lg truncate">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      {item.location}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-lg md:text-xl text-blue-600">
                        {item.price}
                      </p>
                      <p className="text-xs md:text-sm text-gray-500">
                        {item.bids}
                      </p>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                      {item.timeRemaining}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default Auctions;
