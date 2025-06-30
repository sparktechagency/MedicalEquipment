/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useGetOrderAllQuery } from "@/redux/features/OrderUsesr/OrderUsesr";

// Dashboard component
const UserOrder: React.FC = () => {
  const { data } = useGetOrderAllQuery({});
  const orderData = data?.data?.attributes;
  console.log(orderData);

  const [filter, setFilter] = useState("shipped");

  // Filter products based on status
  const filteredProducts = orderData?.filter((product: any) => {
    if (filter === "shipped" && product?.status === "shipped") {
      return true;
    }
    if (filter === "progress" && product?.status === "progress") {
      return true;
    }
    if (filter === "delivery" && product?.status === "delivery") {
      return true;
    }
    return false;
  });

  return (
    <div className="w-full md:container mx-auto md:px-0 px-1 py-2 space-y-5">
      {/* Tabs for filtering data */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setFilter("shipped")}
          className={`${
            filter === "shipped" ? "bg-[#48B1DB] text-white" : "bg-[#C9EDFB] text-gray-700"
          } px-4 py-2 rounded`}
        >
          Shipped
        </button>
        <button
          onClick={() => setFilter("progress")}
          className={`${
            filter === "progress" ? "bg-[#48B1DB] text-white" : "bg-[#C9EDFB] text-gray-700"
          } px-4 py-2 rounded`}
        >
          Progress
        </button>
        <button
          onClick={() => setFilter("delivery")}
          className={`${
            filter === "delivery" ? "bg-[#48B1DB] text-white" : "bg-[#C9EDFB] text-gray-700"
          } px-4 py-2 rounded`}
        >
          delivery
        </button>
      </div>

      {/* Product list */}
      <div className="space-y-6">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((order: any) => (
            <ProductCard Order={order} key={order._id} />
          ))
        ) : (
          <p className="text-center text-gray-500">No items available</p>
        )}
      </div>
    </div>
  );
};

export default UserOrder;
