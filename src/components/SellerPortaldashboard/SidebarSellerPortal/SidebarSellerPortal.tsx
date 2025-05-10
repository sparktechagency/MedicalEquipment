"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { Modal } from "antd";

import Logo from "@/assets/logo/Logo.png"; // Make sure this points to your uploaded logo
import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { RiSettingsLine } from "react-icons/ri";
import {  FaSignOutAlt } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";
import { TbUserDollar } from "react-icons/tb";

const SidebarSellerPortal = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const showDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  const showLogoutModal = () => setLogoutModalVisible(true);
  const handleLogoutCancel = () => setLogoutModalVisible(false);
  const handleLogoutConfirm = () => {
    setLogoutModalVisible(false);
    // Add logout logic here, such as clearing auth tokens or redirecting
    console.log("User logged out");
  };

  return (
    <div className="w-full">
      {/* Mobile Drawer Button */}
      <button
        type="button"
        className="md:hidden block absolute top-5 left-3 z-[99999]" // Ensuring the button is visible with appropriate padding
        onClick={drawerOpen ? closeDrawer : showDrawer}
      >
        <MenuOutlined className="text-3xl text-[#FFFFFF]" />
      </button>

      {/* Custom Sidebar (Drawer) for Mobile */}
      {drawerOpen && (
        <div
          className="fixed top-20 left-0 z-20 w-3/7 py-5 bg-[#EEF9FE] border border-[#EEF9FE] p-5 rounded-md transition-transform transform ease-in-out duration-300"
          style={{
            transform: drawerOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <div className="space-y-4 bg-[#EEF9FE]">
            <div className="py-5">
              <Link href="/Dashboard">
                <div className="flex items-center space-x-2">
                  <MdDashboard className="text-xl" />
                  <span>Dashboard</span>
                </div>
              </Link>
            </div>
            <div className="py-5">
              <Link href="/UserMyBid">
                <div className="flex items-center space-x-2">
                  <LuPackageOpen className="text-xl" />
                  <span>Product Management</span>
                </div>
              </Link>
            </div>
            <div className="py-5">
              <Link href="/UserOrder">
                <div className="flex items-center space-x-2">
                  <TbUserDollar className="text-xl" />
                  <span>Past Bid User</span>
                </div>
              </Link>
            </div>
            <div className="py-5">
              <Link href="/Report">
                <div className="flex items-center space-x-2">
                  <BiDollarCircle className="text-xl" />
                  <span>Earnings</span>
                </div>
              </Link>
            </div>
            <div className="py-5">
              <Link href="/Report">
                <div className="flex items-center space-x-2">
                  <RiSettingsLine className="text-xl" />
                  <span>Setting</span>
                </div>
              </Link>
            </div>
            <button
              onClick={() => {
                showLogoutModal();
                closeDrawer();
              }}
              className="w-full text-left"
            >
              <div className="flex items-center pt-5 space-x-2">
                <FaSignOutAlt className="text-xl" />{" "}
                {/* React Icon for Logout */}
                <span>Logout</span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:block h-screen bg-gradient-to-b from-[#F5F9FA] to-[#48B1DB] p-5 rounded-md border border-[#EEF9FE] ">
        <div className="flex flex-col flex-grow h-[90%] lg:h-[90vh] ">
          {/* Logo */}
          <div className="py-2 flex justify-center ">
            <Image
              width={100}
              height={100}
              src={Logo}
              alt="Logo"
              className="w-[148px] h-[148px] mr-5"
            />
          </div>
          <div className="border-b border-[#EEF9FE] my-3"></div>
          <div className="py-5">
            <Link href="/Dashboard">
              <div className="flex items-center space-x-2">
                <MdDashboard className="text-xl" />
                <span>Dashboard</span>
              </div>
            </Link>
          </div>
          <div className="py-5">
            <Link href="/UserMyBid">
              <div className="flex items-center space-x-2">
                <LuPackageOpen className="text-xl" />
                <span>Product Management</span>
              </div>
            </Link>
          </div>
          <div className="py-5">
            <Link href="/UserOrder">
              <div className="flex items-center space-x-2">
                <TbUserDollar className="text-xl" />
                <span>Past Bid User</span>
              </div>
            </Link>
          </div>
          <div className="py-5">
            <Link href="/Report">
              <div className="flex items-center space-x-2">
                <BiDollarCircle className="text-xl" />
                <span>Earnings</span>
              </div>
            </Link>
          </div>
          <div className="py-5">
            <Link href="/Report">
              <div className="flex items-center space-x-2">
                <RiSettingsLine className="text-xl" />
                <span>Setting</span>
              </div>
            </Link>
          </div>
        </div>

        {/* All divs in the bottom position */}
        <div className="mb-5">
          <button
            onClick={showLogoutModal}
            className="w-full text-left bg-[#50C5F3] px-3 py-2 rounded-lg text-white"
          >
            <div className="flex items-center space-x-2">
              <FaSignOutAlt className="text-2xl text-red-400 mr-2" />
              <span>Logout</span>
            </div>
          </button>
        </div>
      </aside>

      {/* Logout Confirmation Modal */}
      <Modal
        visible={logoutModalVisible}
        onOk={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
        centered
        width={300}
        height={300}
        footer={[
          <button
            key="cancel"
            onClick={handleLogoutCancel}
            className="border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-100"
          >
            No
          </button>,
          <button
            key="confirm"
            onClick={handleLogoutConfirm}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 ml-5 mt-7"
          >
            Yes
          </button>,
        ]}
      >
        <div>
          <h1 className="text-3xl font-semibold">Logout</h1>
          <p className="mb-2">Are you sure you want to log out?</p>
        </div>
      </Modal>
    </div>
  );
};

export default SidebarSellerPortal;
