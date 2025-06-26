/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";
import logo from "@/assets/logo/Logo.png";
import Image from "next/image";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import { Button, Drawer, Avatar, Dropdown } from "antd";
import { MenuOutlined, UserOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
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
    // Check for token and user data in localStorage with Redux persist format
    const persistAuth = localStorage.getItem('persist:auth');
    
    if (persistAuth) {
      try {
        const authData = JSON.parse(persistAuth);
        console.log('Auth data:', authData); // Debug log
        
        // Parse token and user from the persist data
        const storedToken = authData.token ? JSON.parse(authData.token) : null;
        const storedUser = authData.user ? JSON.parse(authData.user) : null;
        
        console.log('Parsed token:', storedToken); // Debug log
        console.log('Parsed user:', storedUser); // Debug log
        
        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(storedUser);
        }
      } catch (error) {
        console.error('Error parsing auth data:', error);
        // Don't clear data immediately, let's see what's wrong first
      }
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('persist:auth');
    setToken(null);
    setUser(null);
    // Optionally redirect to home page
    window.location.href = '/';
  };

  // Base navigation links
  const baseNavLink = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/Auctions",
      label: "Auctions",
    },
    {
      href: "/about-us",
      label: "About",
    },
    {
      href: "/contact-us",
      label: "Contact",
    },
  ];

  // Conditionally add Seller Portal link based on user role
  const navLink = user?.role === 'seller' 
    ? [...baseNavLink, {
        href: "/SellerPortalDashboard",
        label: "Seller portal",
      }]
    : baseNavLink;

  // User dropdown menu items
  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
      onClick: () => {
        // Navigate to profile page
        window.location.href = '/profile';
      }
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      onClick: () => {
        // Navigate to settings page
        window.location.href = '/settings';
      }
    },
    {
      type: 'divider' as const,
      key: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: handleLogout,
      danger: true,
    },
  ];

  return (
    <nav>
      <div className="bg-white md:container flex justify-between items-center py-2 rounded-md px-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="logo"
            className="rounded-md lg:mr-20 w-[34px] h-[44px] md:w-[64px] md:h-[64px]"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-4">
          {navLink.map((link) => (
            <li key={link.href} className="text-[18px]">
              <ActiveLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="flex justify-between items-center lg:gap-8 md:gap-4 gap-3">
          {/* Shopping Cart - Only show if user is logged in */}
          {user && (
            <Link href="/UserOrder">
              <h1 className="bg-[#E5F6FD] p-[7px] md:p-[10px] rounded-full text-[#48B1DB]">
                <LuShoppingCart size={30} />
              </h1>
            </Link>
          )}

          {/* Notifications - Only show if user is logged in */}
          {user && (
            <Link href="#">
              <h1 className="bg-[#E5F6FD] p-[7px] md:p-[10px] rounded-full text-[#48B1DB]">
                <MdOutlineNotificationsNone size={30} />
              </h1>
            </Link>
          )}

          {/* Conditional rendering based on authentication */}
          {user ? (
            // User is logged in - Show user avatar and dropdown
            <Dropdown 
              menu={{ items: userMenuItems }} 
              placement="bottomRight"
              trigger={['click']}
            >
              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md">
                <Avatar 
                  size={40}
                  src={user.image ? `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/${user.image}` : undefined}
                  icon={!user.image && <UserOutlined />}
                  className="border-2 border-[#48B1DB]"
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
            // User is not logged in - Show login button
            <Link href="/login" className="w-full">
              <Button className="bg-[#48B1DB] p-[10px] md:p-[20px] text-white text-[18px]">
                Login
              </Button>
            </Link>
          )}

        </div>

        {/* Mobile Hamburger Button */}
        <Button
          type="text"
          size="large"
          className="md:hidden"
          icon={<MenuOutlined size={30} />}
          onClick={showDrawer}
        />
      </div>

      {/* Mobile Drawer with Links */}
      <Drawer
        placement="left"
        closable={true}
        onClose={closeDrawer}
        open={isDrawerOpen} // Updated from 'visible' to 'open' for newer Ant Design versions
        width={250}
      >
        <div className="flex flex-col h-full">
          {/* User info in mobile drawer */}
          {user && (
            <div className="flex items-center gap-3 p-4 border-b border-gray-200 mb-4">
              <Avatar 
                size={50}
                src={user.image ? `${process.env.NEXT_PUBLIC_API_URL}/${user.image}` : ""}
                className="border-2 border-[#48B1DB]"
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

          {/* Navigation Links */}
          <ul className="space-y-4 flex-1">
            {navLink.map((link) => (
              <li key={link.href} className="text-[18px]" onClick={closeDrawer}>
                <ActiveLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>

          {/* Mobile Login/Logout */}
          <div className="mt-auto pt-4 border-t border-gray-200">
            {user ? (
              <div className="space-y-2">
                <Link href="/profile" onClick={closeDrawer}>
                  <Button 
                    type="text" 
                    icon={<UserOutlined />} 
                    className="w-full text-left justify-start"
                  >
                    Profile
                  </Button>
                </Link>
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