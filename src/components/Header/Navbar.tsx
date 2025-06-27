/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";
import logo from "@/assets/logo/Logo.png";
import Image from "next/image";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import { Button, Drawer, Dropdown } from "antd";
import { MenuOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineNotificationsNone } from "react-icons/md";

// Define user interface
interface User {
  email: string;
  name: string;
  id: string;
  role: string;
  image?: string;
  address?: string;
  phone?: string;
  totalIncome?: number;
  currentBalance?: number;
}

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const showDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  // Check authentication status on component mount
  useEffect(() => {
    const persistAuth = localStorage.getItem("persist:auth");

    if (persistAuth) {
      try {
        const authData = JSON.parse(persistAuth);
        const storedToken = authData.token ? JSON.parse(authData.token) : null;
        const storedUser = authData.user ? JSON.parse(authData.user) : null;

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(storedUser);
        }
      } catch (error) {
        console.error("Error parsing auth data:", error);
      }
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("persist:auth");
    setToken(null);
    setUser(null);
    window.location.href = "/";
  };

  // Profile navigation based on user role
  const handleProfileClick = () => {
    if (user?.role === "seller") {
      window.location.href = "/sellerProfile";
    } else if (user?.role === "user") {
      window.location.href = "/userProfile";
    }
  };

  const baseNavLink = [
    { href: "/", label: "Home" },
    { href: "/Auctions", label: "Auctions" },
    { href: "/about-us", label: "About" },
    { href: "/contact-us", label: "Contact" },
  ];

  const navLink =
    user?.role === "seller"
      ? [
          ...baseNavLink,
          { href: "/SellerPortalDashboard", label: "Seller portal" },
        ]
      : baseNavLink;

  const userMenuItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Profile",
      onClick: handleProfileClick,
    },
    { type: "divider" as const, key: "divider" },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      onClick: handleLogout,
      danger: true,
    },
  ];

  // Helper to get avatar URL safely
  const getAvatarSrc = () => {
    if (user?.image) {
      const baseUrl = "https://d7003.sobhoy.com";
      console.log(baseUrl)
      if (baseUrl) {
        return `${baseUrl}/${user.image}`;
      }
    }
    return "";
  };

  return (
    <nav>
      <div className="bg-white md:container flex justify-between items-center py-2 rounded-md px-3">
        <Link href="/">
          <Image
            src={logo}
            width={64}
            height={64}
            alt="logo"
            className="rounded-md w-[34px] h-[44px] md:w-[64px] md:h-[64px]"
          />
        </Link>

        <ul className="hidden md:flex gap-4">
          {navLink.map((link) => (
            <li key={link.href} className="text-[18px]">
              <ActiveLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center lg:gap-8 md:gap-4 gap-3">
          {user?.role === "user" && (
            <Link href="/UserOrder">
              <h1 className="bg-[#E5F6FD] p-[7px] md:p-[10px] rounded-full text-[#48B1DB]">
                <LuShoppingCart size={30} />
              </h1>
            </Link>
          )}

          {user && (
            <Link href="#">
              <h1 className="bg-[#E5F6FD] p-[7px] md:p-[10px] rounded-full text-[#48B1DB]">
                <MdOutlineNotificationsNone size={30} />
              </h1>
            </Link>
          )}

          {user ? (
            <Dropdown
              menu={{ items: userMenuItems }}
              placement="bottomRight"
              trigger={["click"]}
            >
              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md">
                <Image
                  width={500}
                  height={500}
                  src={getAvatarSrc()}
                  alt="User avatar"
                  className="w-[50px] h-[50px] border-2 border-[#48B1DB] rounded-full"
                  priority
                />
                <div className="hidden lg:block">
                  <p className="text-sm font-medium text-gray-900 capitalize">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500 capitalize">
                    {user.role}
                  </p>
                </div>
              </div>
            </Dropdown>
          ) : (
            <Link href="/login" className="w-full">
              <Button className="bg-[#48B1DB] p-[10px] md:p-[20px] text-white text-[18px]">
                Login
              </Button>
            </Link>
          )}
        </div>

        <Button
          type="text"
          size="large"
          className="md:hidden"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        />
      </div>

      <Drawer
        placement="left"
        closable
        onClose={closeDrawer}
        open={isDrawerOpen}
        width={250}
      >
        <div className="flex flex-col h-full">
          {user && (
            <div className="flex items-center gap-3 p-4 border-b border-gray-200 mb-4">
              <Image
                width={10}
                height={10}
                src={getAvatarSrc()}
                alt="User avatar"
                className="w-[50px] h-[50px] border-2 border-[#48B1DB] rounded-full"
                priority
              />
              <div>
                <p className="font-medium text-gray-900 capitalize">
                  {user.name}
                </p>
                <p className="text-sm text-gray-500 capitalize">
                  {user.role}
                </p>
              </div>
            </div>
          )}

          <ul className="space-y-4 flex-1">
            {navLink.map((link) => (
              <li
                key={link.href}
                className="text-[18px]"
                onClick={closeDrawer}
              >
                <ActiveLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-4 border-t border-gray-200">
            {user ? (
              <div className="space-y-2">
                <Button
                  type="text"
                  icon={<UserOutlined />}
                  className="w-full text-left justify-start"
                  onClick={() => {
                    handleProfileClick();
                    closeDrawer();
                  }}
                >
                  Profile
                </Button>
                <Button
                  type="text"
                  danger
                  icon={<LogoutOutlined />}
                  onClick={handleLogout}
                  className="w-full text-left justify-start"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link href="/login" onClick={closeDrawer}>
                <Button className="bg-[#48B1DB] text-white w-full">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
