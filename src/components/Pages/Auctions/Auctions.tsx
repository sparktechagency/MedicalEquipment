/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import PaginationComponent from "@/components/UI/PaginationComponent";
import { AuctionItem, Category } from "@/types/types";
import { useGetCategoryAllQuery } from "@/redux/features/ProductManagement/ProductManagement";
import { useFetchProductsQuery } from "@/redux/features/Auctions/Auctions";
import moment from "moment";

const Auctions = () => {
  const { data: categoriesData, isLoading: categoriesLoading } = useGetCategoryAllQuery({});
  const categories: Category[] = categoriesData?.data?.attributes?.filter(
    (cat: Category) => !cat.isDeleted
  ) || [];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [sortOption, setSortOption] = useState("auction-time");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Map sortOption to API-expected sortprice values
  const sortPriceOrderMap: { [key: string]: string } = {
    "auction-price": "",
    "price-high-to-low": "-1",
    "price-low-to-high": "1",
  };



  // Find the category ID based on the selected category name
  const selectedCategoryId = categories.find((cat) => cat.name === selectedCategory)?._id || "";

  // Fetch products with dynamic query parameters
  const { data: productsData, isLoading: productsLoading } = useFetchProductsQuery({
    categoryId: selectedCategoryId,
    title: searchQuery,
    sortPriceOrder: sortPriceOrderMap[sortOption],
  });

  const products: AuctionItem[] = productsData?.data?.attributes || [];

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Paginate the data
  const currentItems = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const showDrawer = () => setIsSidebarOpen(true);
  const closeDrawer = () => setIsSidebarOpen(false);

  // Reset current page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortOption, activeTab]);

  // Render category list (shared between desktop and mobile)
  const renderCategoryList = () => (
    <ul className="my-4 bg-[#EEF9FE] p-5">
      {categories.length > 0 ? (
        categories.map((item: Category, index: number) => (
          <li
            key={index}
            className="py-2 cursor-pointer"
            onClick={() => {
              setSelectedCategory(item.name);
              closeDrawer();
            }}
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
        ))
      ) : (
        <li>No categories available</li>
      )}
    </ul>
  );

  return (
    <section className="w-full md:container mx-auto mt-2">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4">
        {/* Sidebar - Always visible on desktop */}
        <aside className="hidden md:block pr-4">
          <h2 className="text-sm text-gray-600">
            Home {'>'} <span className="text-[#48B1DB] font-semibold">Collectible Products</span>
          </h2>
          <h1 className="text-xl font-bold py-3">Collectible Products</h1>
          <p className="text-base">All Categories</p>
          {categoriesLoading ? <p>Loading categories...</p> : renderCategoryList()}
        </aside>

        {/* Sidebar Drawer - Only on Mobile */}
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex md:hidden">
            <div className="bg-white w-4/5 max-w-md p-1 md:p-4 shadow-lg h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-bold ">Categories</h1>
                <button className="text-gray-500" onClick={closeDrawer}>
                  <XIcon className="h-6 w-6" />
                </button>
              </div>
              <h2 className="text-sm text-gray-600">
                Home {'>'} <span className="text-[#48B1DB] font-semibold">Collectible Products</span>
              </h2>
              <h1 className="font-bold py-3">Collectible Products</h1>
              <p className="text-base">All Categories</p>
              {categoriesLoading ? <p>Loading categories...</p> : renderCategoryList()}
            </div>
            <div className="flex-1" onClick={closeDrawer}></div>
          </div>
        )}

        {/* Main Content with Search */}
        <div className="w-full">
          <div className="flex items-center justify-between px-2 md:px-0">
            {/* Mobile Hamburger Button */}
            <button className="md:hidden text-gray-500" onClick={showDrawer}>
              <MenuIcon className="h-6 w-6" />
            </button>
            <div className="w-full flex justify-end items-center px-2 md:px-0">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your products here..."
                className="border-2 border-[#48B1DB] bg-[#EEF9FE] rounded-md px-4 py-2 w-full md:w-[330px]"
              />
            </div>
          </div>

          {/* Tabs and Sorting Options */}
          <div>
            <div className="flex items-center justify-between py-4 border-b border-[#E5F6FD] px-2 md:px-0">
              {/* Tabs */}
              <div className="flex md:space-x-4">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-[5px] md:px-2 py-2 text-sm font-semibold rounded-lg ${
                    activeTab === "all" ? "bg-blue-100 text-blue-600" : "text-gray-600"
                  }`}
                >
                  All Listings
                </button>
                <button
                  onClick={() => setActiveTab("auction")}
                  className={`px-2 py-2 text-sm font-semibold rounded-lg ${
                    activeTab === "auction" ? "bg-blue-100 text-blue-600" : "text-gray-600"
                  }`}
                >
                  Auction
                </button>
              </div>

              {/* Sorting Option */}
              <div className="flex items-center space-x-2">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="text-sm border border-blue-300 rounded-md py-2 focus:outline-none"
                >
                  <option value="auction-time">Sort by Price</option>
                  <option value="price-high-to-low">Price (High to Low)</option>
                  <option value="price-low-to-high">Price (Low to High)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Display filtered items */}
          {productsLoading ? (
            <p>Loading products...</p>
          ) : products.length === 0 ? (
            <p>No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 lg:gap-12 mt-2 px-2 md:px-0">
              {currentItems.map((item: AuctionItem) => (
                <Link
                  href={`/Auctions/${item._id}`}
                  key={item._id}
                  className="bg-[#FFFFFF] rounded-md shadow-md mx-auto w-full max-w-[350px] md:max-w-[400px]"
                >
                  <Image
                    width={300}
                    height={250}
                    src={item?.images ? `${process.env.NEXT_PUBLIC_BASE_URL}/${item?.images[0]}`
                        : '/placeholder.png'
                    }
                    alt={item.title}
                    className="w-full h-40 md:h-52  rounded-md p-1"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-base md:text-lg truncate">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{item.author?.address}</p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-lg md:text-xl text-blue-600">${item.price}</p>
                    </div>
                    <p className="text-xs md:text-sm text-red-500 mt-1">
                     {moment(item.date).format('dddd, MMMM Do YYYY, HH:mm')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

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
