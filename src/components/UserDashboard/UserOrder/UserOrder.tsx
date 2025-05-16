"use client"
import React, { useState } from "react";
import ProductCard from "./ProductCard";

// Interface for a single product
const PRODUCTS: Array<{
  id: number;
  status: "Pending" | "Progress" | "Complete";
  title: string;
  description: string;
  price: number;
  yourBid: number;
  highestOtherBid: number;
  bidTime: string;
  imgUrl: string;
}> = [
  {
    id: 1,
    status: "Pending",
    title: "GE Vivid S70 Ultrasound Machine",
    description:
      "Advanced cardiovascular ultrasound system with crystal-clear imaging and intuitive workflow.",
    price: 200,
    yourBid: 210,
    highestOtherBid: 205,
    bidTime: "11 Oct 24, 11:10PM",
    imgUrl: "https://i.ibb.co/bjzn3zKW/Rectangle-3.png",
  },
  {
    id: 2,
    status: "Progress",
    title: "Philips Epiq 5 Ultrasound System",
    description:
      "Advanced cardiovascular ultrasound system with crystal-clear imaging and intuitive workflow.",
    price: 180,
    yourBid: 190,
    highestOtherBid: 185,
    bidTime: "12 Oct 24, 09:45AM",
    imgUrl: "https://i.ibb.co/bjzn3zKW/Rectangle-3.png",
  },
  {
    id: 3,
    status: "Complete",
    title: "Siemens Acuson P300 Ultrasound Machine",
    description:
      "Advanced cardiovascular ultrasound system with crystal-clear imaging and intuitive workflow.",
    price: 220,
    yourBid: 230,
    highestOtherBid: 225,
    bidTime: "10 Oct 24, 02:30PM",
    imgUrl: "https://i.ibb.co/bjzn3zKW/Rectangle-3.png",
  },
  {
    id: 4,
    status: "Pending",
    title: "Mindray DC-40 Ultrasound Machine",
    description:
      "Advanced cardiovascular ultrasound system with crystal-clear imaging and intuitive workflow.",
    price: 150,
    yourBid: 160,
    highestOtherBid: 155,
    bidTime: "13 Oct 24, 06:20PM",
    imgUrl: "https://i.ibb.co/bjzn3zKW/Rectangle-3.png",
  },
  {
    id: 5,
    status: "Progress",
    title: "Toshiba Xario 200 Ultrasound System",
    description:
      "Advanced cardiovascular ultrasound system with crystal-clear imaging and intuitive workflow.",
    price: 210,
    yourBid: 220,
    highestOtherBid: 215,
    bidTime: "11 Oct 24, 04:55PM",
    imgUrl: "https://i.ibb.co/bjzn3zKW/Rectangle-3.png",
  },
];

// Interface for the dashboard state (active tab)
type Tab = "Pending" | "Progress" | "Complete";

// Dashboard component as an arrow function
const UserOrder: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Progress");
  const filtered = PRODUCTS.filter((p) => p.status === activeTab);

  return (
    <div className="w-full md:container mx-auto md:px-0 px-1 py-2 space-y-5">
      {/* Tabs */}
      <div className="md:flex space-y-1 md:space-y-0 md:space-x-3">
        {(["Pending", "Progress", "Complete"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-4 py-2 rounded-full font-medium transition
              ${activeTab === tab ? "bg-[#48B1DB] text-white" : "bg-[#EEF9FE] text-[#48B1DB] border border-[#48B1DB] hover:bg-blue-50"}
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product list */}
      <div className="space-y-6">
        {filtered.length > 0 ? (
          filtered.map((p) => <ProductCard key={p.id} {...p} />)
        ) : (
          <p className="text-center text-gray-500">No items in &quot;{activeTab}&quot;</p>
        )}
      </div>
    </div>
  );
};

export default UserOrder;
