"use client";
import { useState } from "react";
import { MdDriveFolderUpload } from "react-icons/md";

const UserProfile = () => {
  // State to hold the uploaded image URL
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Handle image file upload
  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string); // Set the uploaded image URL
      };
      reader.readAsDataURL(file); // Convert the file to base64
    }
  };

  return (
    <div>
      {/* Profile Header Section with Custom Gradient Background */}
      <div className="bg-custom-gradient w-full h-[150px] rounded-tl-[120px] md:rounded-tl-[90px] rounded-md">
        {/* Avatar and Profile Info */}
        <div className="flex items-center p-9 md:p-8 space-x-5">
          {/* Avatar Image or Placeholder */}
          <img
            src={profileImage || "https://via.placeholder.com/80"} // Show uploaded image or placeholder
            alt="User Avatar"
            className="ml-4 md:ml-0 w-24 h-24 rounded-full border-4 border-white"
          />
          <div>
            <h2 className="text-white text-2xl font-semibold">John Doe</h2>
            <p className="text-white text-sm">
              Update your profile and personal details.
            </p>
          </div>
        </div>
      </div>
      <br /><br />
      {/* Additional Content Section */}
      <div className="flex flex-col p-4 space-y-4 w-full bg-[#EEF9FE] mt-10 md:mt-0 md:rounded-md">
        <div className="w-full md:flex md:space-x-4 py-3 rounded-md">
          <input
            type="text"
            placeholder="Enter name"
            className="mb-5 md:mb-0 w-full border-2 border-[#48B1DB] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48B1DB]"
          />
          <input
            type="email"
            placeholder="Enter email"
            className="w-full border-2 border-[#48B1DB] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48B1DB]"
          />
        </div>
        <input
          type="text"
          placeholder="Enter phone"
          className="border-2 border-[#48B1DB] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48B1DB]"
        />

        {/* Image Upload Section */}
        <div className="w-full border-2 bg-white border-[#48B1DB] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48B1DB]">
          <label className="cursor-pointer w-full text-center flex justify-center items-center">
            <MdDriveFolderUpload size={50} className="text-[#48B1DB] text-3xl mr-1" /> <span className="text-gray-400 text-md font-semibold">Upload Photo</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        <button className="w-full md:w-[10%] md:mx-auto bg-[#48B1DB] text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#48B1DB]">
          Save
        </button>
      </div>
    </div>
  );
};

export default UserProfile;


