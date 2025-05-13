"use client";
import { useState } from "react";
import Image from "next/image";

const SellerProfile = () => {
  // Default data for the profile
  const [fullName, setFullName] = useState("Hisham");
  const [email, setEmail] = useState("emily@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("019732897638");
  const [address, setAddress] = useState("New York, US");
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Handle form submission (for example, update the data)
  const handleUpdateProfile = () => {
    console.log("Profile updated:", { fullName, email, phoneNumber, address });
  };

  return (
    <div className="max-w-3xl my-10 md:my-20 mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4 border-b pb-4 mb-6">
        <div className="flex-shrink-0">
          <div className="relative">
            {/* Profile Image */}
            <Image
              src={profileImage || "https://i.ibb.co/0C5x0zk/Ellipse-1232.png"}
              alt="User Image"
              width={100} // Set a fixed width for the image
              height={100} // Set a fixed height for the image
              className="rounded-full h-24 w-24 cursor-pointer border-4 border-[#48B1DB] object-cover"
              onClick={() => document.getElementById("imageInput")?.click()}
            />
            <input
              type="file"
              id="imageInput"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{fullName}</h2>
          <p className="text-gray-500">Admin</p>
        </div>
      </div>

      {/* Show form only when editing */}
      <div className="space-y-4">
        <div>
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
        <div>
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
        <div>
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
        <div>
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

      {/* Edit Profile Button */}
      <div className="mt-6">
        <button
          onClick={handleUpdateProfile}
          className="w-full py-2 px-4 bg-[#48B1DB] text-white rounded-md  transition"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default SellerProfile;
