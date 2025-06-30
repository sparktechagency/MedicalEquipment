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

  // Logout function
  const handleLogout = () => {
    try {
      // Remove all auth related data
      localStorage.removeItem('persist:auth');
      localStorage.removeItem('persist:root');
      
      // Clear all localStorage items that start with 'persist:'
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('persist:')) {
          localStorage.removeItem(key);
        }
      });
      
      // Force page reload and redirect
      window.location.replace('/');
      
      // Backup method if replace doesn't work
      setTimeout(() => {
        window.location.reload();
      }, 100);
      
    } catch (error) {
      console.error('Logout error:', error);
      // Fallback - clear everything and redirect
      localStorage.clear();
      window.location.href = '/';
    }
  };

  const handleLogoutConfirm = () => {
    setLogoutModalVisible(false);
    handleLogout();
  };

  return (
    <div className="w-full">
      {/* Mobile Drawer Button */}
      <button
        type="button"
        className="md:hidden block fixed top-4 left-4 z-30 bg-white p-2 rounded-full shadow-lg"
        onClick={showDrawer}
      >
        <MenuOutlined className="text-2xl text-[#48B1DB]" />
      </button>

      {/* Custom Sidebar (Drawer) for Mobile */}
      {drawerOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={closeDrawer}
          ></div>
          
          {/* Drawer */}
          <div
            className="fixed top-0 left-0 z-20 w-2/3 h-full py-5 bg-[#EEF9FE] border border-[#EEF9FE] p-5 transition-transform transform ease-in-out duration-300 overflow-y-auto"
            style={{
              transform: drawerOpen ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            {/* Close button */}
            <div className="flex justify-end mb-4">
              <button 
                onClick={closeDrawer}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            </div>
            
            <div className="space-y-4 bg-[#EEF9FE]">
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
              <Link href="/UserMyBid">
                <div
                  className="flex items-center space-x-2"
                  onClick={closeDrawer}
                >
                  <span>My Bid </span>
                </div>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/UserOrder">
                <div
                  className="flex items-center space-x-2"
                  onClick={closeDrawer}
                >
                  <span>Order</span>
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
        </>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:block bg-[#EEF9FE] w-52  px-3 rounded-md border border-[#EEF9FE]">
        {/* Full height and background color */}
        <div className="py-5">
          <Link href="/userProfile">
            <div className="flex items-center space-x-2 " onClick={closeDrawer}>
              <span>My Profile</span>
            </div>
          </Link>
        </div>
        <div className="py-5">
          <Link href="/UserMyBid">
            <div className="flex items-center space-x-2" onClick={closeDrawer}>
              <span>My Bid </span>
            </div>
          </Link>
        </div>
        <div className="py-5">
          <Link href="/UserOrder">
            <div className="flex items-center space-x-2" onClick={closeDrawer}>
              <span>Order</span>
            </div>
          </Link>
        </div>
        <div className="py-5">
          <Link href="/Report">
            <div className="flex items-center space-x-2" onClick={closeDrawer}>
              <span>Report</span>
            </div>
          </Link>
        </div>
        <div className="pt-20 pb-2 mt-auto">
          <button onClick={showLogoutModal} className="w-full text-left">
            <div className="flex items-center space-x-2">
              <span>Logout</span>
            </div>
          </button>
        </div>
      </aside>

      {/* Logout Confirmation Modal */}
      <Modal
        open={logoutModalVisible}
        onOk={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
        centered
        width={300} // Set the width here (in pixels)
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