/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import React, { useState } from "react";
import {  FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleNewPasswordVisibility = () => setShowNewPassword(!showNewPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const [updatePassword, { isLoading }] = useChangePasswordMutation();

  const handleUpdatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const oldPassword = formData.get("currentPassword") as string;
    const newPassword = formData.get("newPassword") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!oldPassword || !newPassword || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required.",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "New passwords do not match.",
      });
      return;
    }

    try {
      const response = await updatePassword({ oldPassword, newPassword }).unwrap();
      console.log(response) 
      if(response.code === 200){
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Password updated successfully!",
        });
        e.currentTarget.reset();
      }
    
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleUpdatePassword} className=" space-y-4 md:max-w-5xl lg:max-w-3xl m mx-auto">
      <div className="flex flex-col">
        <label htmlFor="currentPassword" className="mb-1">
          Current Password
        </label>
        <div className="relative">
          <input
            name="currentPassword"
            id="currentPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Current Password"
            className="w-full border border-gray-400 px-3 py-2 rounded-md"
          />
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#48B1DB] cursor-pointer select-none"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="newPassword" className="mb-1">
          New Password
        </label>
        <div className="relative">
          <input
            name="newPassword"
            id="newPassword"
            type={showNewPassword ? "text" : "password"}
            placeholder="Enter New Password"
            className="w-full border border-gray-400 px-3 py-2 rounded-md"
          />
          <span
            onClick={toggleNewPasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#48B1DB] cursor-pointer select-none"
          >
            {showNewPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="confirmPassword" className="mb-1">
          Confirm New Password
        </label>
        <div className="relative">
          <input
            name="confirmPassword"
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm New Password"
            className="w-full border border-gray-400 px-3 py-2 rounded-md"
          />
          <span
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#48B1DB] cursor-pointer select-none"
          >
            {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#48B1DB] text-white px-6 py-2 rounded-md disabled:opacity-50"
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
