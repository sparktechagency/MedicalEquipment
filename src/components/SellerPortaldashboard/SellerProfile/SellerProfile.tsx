"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SellerProfile = () => {
  // Default data for the profile
  const [fullName, setFullName] = useState("Hisham");
  const [email, setEmail] = useState("emily@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("019732897638");
  const [address, setAddress] = useState("New York, US");

  // Handle form submission (for example, update the data)
  const handleUpdateProfile = () => {
    // Logic to update profile data
    console.log("Profile updated:", { fullName, email, phoneNumber, address });
  };

  return (
    <div className="max-w-3xl my-10 md:my-20 mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4 border-b pb-4 mb-6">
        <div className="flex-shrink-0">
          <Image
            src="https://i.ibb.co/0C5x0zk/Ellipse-1232.png"
            alt="User Image"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{fullName}</h2>
          <p className="text-gray-500">Admin</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="">
          <label htmlFor="fullName" className="text-gray-600">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="text-gray-800 border p-2 rounded-md w-full"
          />
        </div>
        <div className="">
          <label htmlFor="email" className="text-gray-600">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-gray-800 border p-2 rounded-md w-full"
          />
        </div>
        <div className="">
          <label htmlFor="phoneNumber" className="text-gray-600">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="text-gray-800 border p-2 rounded-md w-full"
          />
        </div>
        <div className="">
          <label htmlFor="address" className="text-gray-600">
            Address
          </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="text-gray-800 border p-2 rounded-md w-full"
          />
        </div>
      </div>
      <div className="mt-6">
        <Link href={`/sellerProfile/${1}`}>
          <button
            onClick={handleUpdateProfile}
            className="w-full py-2 px-4 bg-[#48B1DB] text-white rounded-md hover:bg-blue-700 transition"
          >
            Edit Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SellerProfile;
