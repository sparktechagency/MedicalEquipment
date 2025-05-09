"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { Modal } from "antd";

const Sidebar = () => {
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
        className="md:hidden block absolute top-0 left-5" // Ensuring the button is visible with appropriate padding
        onClick={showDrawer}
      >
        <MenuOutlined className="text-3xl text-[#48B1DB]" />{" "}
        {/* Ensuring the icon is large and visible */}
      </button>

      {/* Custom Sidebar (Drawer) for Mobile */}
      {drawerOpen && (
        <div
          className="fixed top-12 left-0 z-20 w-1/2 py-5 bg-[#EEF9FE] border border-[#EEF9FE] p-5 rounded-md transition-transform transform ease-in-out duration-300"
          style={{
            transform: drawerOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <div className="  space-y-4 bg-[#EEF9FE]">
            {/* Full height and background color */}
            <div className="py-2">
              <Link href="/userProfile">
                <div
                  className="flex items-center space-x-2 "
                  onClick={closeDrawer}
                >
                  <span>My Profile</span>
                </div>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/">
                <div
                  className="flex items-center space-x-2"
                  onClick={closeDrawer}
                >
                  <span>Report</span>
                </div>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/">
                <div
                  className="flex items-center space-x-2"
                  onClick={closeDrawer}
                >
                  <span>Order</span>
                </div>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/">
                <div
                  className="flex items-center space-x-2"
                  onClick={closeDrawer}
                >
                  <span>My History</span>
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
                <span>Logout</span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:block bg-[#EEF9FE] w-50  px-7 rounded-md border border-[#EEF9FE]">
        <div className="py-3">
          <Link href="/profile">
            <div className="flex items-center space-x-2">
              <span>My Profile</span>
            </div>
          </Link>
        </div>
        <div className="py-3">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <span>Report</span>
            </div>
          </Link>
        </div>
        <div className="py-3">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <span>Order</span>
            </div>
          </Link>
        </div>
        <div className="py-3">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <span>My History</span>
            </div>
          </Link>
        </div>
        <div className="py-10 pt-10 mt-auto">
          <button onClick={showLogoutModal} className="w-full text-left">
            <div className="flex items-center space-x-2">
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
        width={300} // Set the width here (in pixels)
        height={300} // Set the height here (in pixels), if necessary
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

export default Sidebar;
