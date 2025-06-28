


"use client";

import { useEffect, useState } from "react";
import { MdDriveFolderUpload } from "react-icons/md";
import { toast } from "sonner";

import { useGetUserQuery, useUpdateUserMutation } from "@/redux/features/Profile/Profile";
 // Adjust path based on your folder structure
import Image from "next/image";

const UserProfile = () => {
  const { data, refetch } = useGetUserQuery({});
  const user = data?.attributes?.user;

  const [updateProfileInfo, { isLoading }] = useUpdateUserMutation();

  // State setup
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Set default values when user is fetched
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setAddress(user.address || "");
    }
  }, [user]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("address", address);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await updateProfileInfo(formData);
      if ("data" in response && response.data) {
        toast.success("Profile updated successfully!");
        refetch();
      }
    } catch (error) {
      toast.error("Something went wrong while updating your profile.");
      console.error("Update Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col p-4 space-y-4 w-full bg-[#EEF9FE] mt-5 rounded-md">
        <div className="w-full md:flex md:space-x-4 py-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="w-full border-2 border-[#48B1DB] p-3 rounded-md"
          />
          <input
            type="email"
            value={email}
            readOnly
            className="w-full border-2 border-[#48B1DB] p-3 rounded-md bg-gray-100 cursor-not-allowed"
          />
        </div>

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone"
          className="border-2 border-[#48B1DB] p-3 rounded-md"
        />

        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address"
          className="border-2 border-[#48B1DB] p-3 rounded-md"
        />

        <div className="w-full border-2 bg-white border-[#48B1DB] p-3 rounded-md">
          <label className="cursor-pointer w-full text-center flex justify-center items-center">
            <MdDriveFolderUpload size={50} className="text-[#48B1DB] mr-1" />
            <span className="text-gray-400 font-semibold">Upload Photo</span>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>
          {profileImage && (
            <div className="mt-4 text-center">
              <Image
                width={500}
                height={500}
                src={profileImage}
                alt="Profile"
                className="h-28 w-28 mx-auto rounded-full object-cover"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full md:w-[10%] md:mx-auto bg-[#48B1DB] text-white py-3 rounded-md hover:bg-blue-700"
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
};

export default UserProfile;
