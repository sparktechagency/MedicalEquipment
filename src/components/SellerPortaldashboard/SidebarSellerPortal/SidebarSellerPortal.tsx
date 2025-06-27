"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdDashboard } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { RiSettingsLine } from "react-icons/ri";
import { FaSignOutAlt } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";

import Logo from "@/assets/logo/Logo.png";

interface NavItemProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, onClick }) => {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname?.replace(/\/$/, "") === href.replace(/\/$/, "");

  return (
    <div className="py-2">
      <Link
        href={href}
        aria-current={isActive(href) ? "page" : undefined}
        onClick={onClick}
        className={`flex items-center space-x-2 px-2 py-2 rounded-md transition-colors ${
          isActive(href)
            ? "text-white bg-[#48B1DB] hover:bg-[#48B1DB]"
            : "text-black hover:bg-gray-100"
        }`}
      >
        <Icon className="text-xl" />
        <span>{label}</span>
      </Link>
    </div>
  );
};

const SidebarSellerPortal = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);


  const showDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);
  const showLogoutModal = () => setLogoutModalVisible(true);
  const handleLogoutCancel = () => setLogoutModalVisible(false);

  const handleLogoutConfirm = async () => {
  try {
    setIsLoggingOut(true);

    // Clear all auth-related data
    ['persist:auth', 'token', 'user', 'authToken', 'userInfo'].forEach((key) => {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    });

    setLogoutModalVisible(false);
    window.location.href = '/';
  } catch (error) {
    console.error('Logout error:', error);
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/';
  } finally {
    setIsLoggingOut(false);
  }
};

  const navItems = [
    { href: "/SellerPortalDashboard", icon: MdDashboard, label: "Dashboard" },
    { href: "/productManagement", icon: LuPackageOpen, label: "Product" },
    { href: "/OrderListUser", icon: TiShoppingCart, label: "Order List" },
    { href: "/Earnings", icon: BiDollarCircle, label: "Earnings" },
    { href: "/Settings", icon: RiSettingsLine, label: "Settings" },
  ];

  return (
    <div className="w-full">
      {/* Mobile Drawer Button */}
      <button
        type="button"
        className="md:hidden fixed top-5 left-3 z-[99999]"
        onClick={drawerOpen ? closeDrawer : showDrawer}
        aria-label={drawerOpen ? "Close menu" : "Open menu"}
        aria-expanded={drawerOpen}
      >
        <MenuOutlined className="text-3xl text-white" />
      </button>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={closeDrawer}
          />
          {/* Drawer */}
          <div
            className="fixed top-0 left-0 z-20 w-3/4 h-screen bg-[#EEF9FE] p-5 transition-transform duration-300 md:hidden flex flex-col overflow-y-auto"
            style={{
              transform: drawerOpen ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <div className="flex flex-col justify-between h-full">
              {/* Top Content */}
              <div>
                <div className="py-2 flex justify-center">
                  <Image
                    width={148}
                    height={148}
                    src={Logo}
                    alt="Logo"
                    className="w-[148px] h-[148px]"
                  />
                </div>
                <div className="border-b border-[#EEF9FE] my-3" />
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <NavItem
                      key={item.href}
                      {...item}
                      onClick={closeDrawer}
                    />
                  ))}
                </div>
              </div>
              {/* Logout Button */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    showLogoutModal();
                    closeDrawer();
                  }}
                  className="w-full text-left"
                  disabled={isLoggingOut}
                >
                  <div className="flex items-center space-x-2 px-4 text-red-500">
                    <FaSignOutAlt className="text-xl" />
                    <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col justify-between h-screen bg-gradient-to-b from-[#F5F9FA] to-[#48b1dbd3] p-3 rounded-md border border-[#EEF9FE]">
        <div>
          <div className="py-2 flex justify-center">
            <Image
              width={148}
              height={148}
              src={Logo}
              alt="Logo"
              className="w-[148px] h-[148px]"
            />
          </div>
          <div className="border-b border-[#EEF9FE] my-1" />
          <div className="space-y-2 mt-4">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={showLogoutModal}
            className="w-full text-left bg-[#48B1DB] px-3 py-2 rounded-md text-white hover:bg-primary-dark disabled:opacity-50"
            disabled={isLoggingOut}
          >
            <div className="flex items-center space-x-2">
              <FaSignOutAlt className="text-xl text-red-400" />
              <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
            </div>
          </button>
        </div>
      </aside>

      {/* Logout Modal */}
      <Modal
        open={logoutModalVisible}
        onOk={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
        centered
        width={300}
        confirmLoading={isLoggingOut}
        footer={[
          <button
            key="cancel"
            onClick={handleLogoutCancel}
            className="border border-red-500 text-red-500 px-4 py-1 rounded hover:bg-red-100"
            disabled={isLoggingOut}
          >
            No
          </button>,
          <button
            key="confirm"
            onClick={handleLogoutConfirm}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 ml-2 disabled:opacity-50"
            disabled={isLoggingOut}
          >
            {isLoggingOut ? 'Logging out...' : 'Yes'}
          </button>,
        ]}
      >
        <div>
          <h1 className="text-2xl font-semibold">Logout</h1>
          <p className="mb-2">Are you sure you want to log out?</p>
        </div>
      </Modal>
    </div>
  );
};

export default SidebarSellerPortal;