"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useGetBidAllQuery } from "@/redux/features/UserBid/UserBid";

const UserMyBid = () => {
  const { data } = useGetBidAllQuery({});

  const bidData = data?.data?.attributes?.products;
  console.log(bidData);
  
  // State to handle the current filter ('bid' or 'win')
  const [filter, setFilter] = useState("bid");

  // Function to filter the products based on the selected filter
  const filteredProducts = bidData?.filter((product: any) => {
    if (filter === "bid") {
      // Show all bid products
      return true; // No condition to filter, all products will show
    }
    if (filter === "win" && product?.isWinner === true) {
      // Show only products that are won
      return true;
    }
    return false; // Default return, when none of the conditions are met
  });

  return (
    <div className="w-full px-1 md:px-0 md:container mx-auto py-6">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setFilter("bid")}
          className={`${
            filter === "bid" ? "bg-[#48B1DB] text-white" : "bg-[#C9EDFB] text-gray-700"
          } px-4 py-2 rounded`}
        >
          Bid
        </button>
        <button
          onClick={() => setFilter("win")}
          className={`${
            filter === "win" ? "bg-[#48B1DB] text-white" : "bg-[#C9EDFB] text-gray-700"
          } px-4 py-2 rounded`}
        >
          Win
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-4">
        Products ({filteredProducts?.length})
      </h2>

      <div>
        {filteredProducts?.map((products: any) => (
          <ProductCard key={products._id} products={products} />
        ))}
      </div>
    </div>
  );
};

export default UserMyBid;
