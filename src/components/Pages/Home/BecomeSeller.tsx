import React from 'react';
// Import icons for the product categories
import icon0 from "@/assets/BecomeSeller/Frame49.png";
import icon1 from "@/assets/BecomeSeller/Frame50.png";
import icon2 from "@/assets/BecomeSeller/Frame53.png";
import icon3 from "@/assets/BecomeSeller/Frame55.png";
import icon4 from "@/assets/BecomeSeller/Frame57.png";
import icon5 from "@/assets/BecomeSeller/Frame59.png";
import Image from "next/image";

const icons = [
  { icon: icon0, label: "Sign Up & Verify" },
  { icon: icon1, label: "Add Product" },
  { icon: icon2, label: "Choose Auction" },
  { icon: icon3, label: "Start Selling" },
  { icon: icon4, label: "Bid Wins" },
  { icon: icon5, label: "Get Paid 10%" },
];

const BecomeSeller = () => {
  return (
    <div className="bg-[#48B1DB] py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-7">
          Become a Seller in Minutes
        </h2>
        <p className="text-xl text-white mb-16">
          Start listing and selling your medical equipment in just a few steps — with only a 10% commission.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Step 2: Map through the steps and display them */}
          {icons.map((step, index) => (
            <div key={index} className="flex  flex-col items-center">
              <div className="bg-white p-6 rounded-md mb-4 w-full  h-[161px] mx-auto">
                <Image width={100} height={100} src={step.icon} alt={step.label} className="w-12 h-12 mx-auto" />
                <p className="text-gray-700 font-semibold mt-7 text-[20px]">{step.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BecomeSeller;
