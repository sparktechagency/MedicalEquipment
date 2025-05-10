/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import logo from "@/assets/logo/Logo.png";
import Image from "next/image";
import ActiveLink from "./ActiveLink"; // Assuming this component works fine
import Link from "next/link";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineNotificationsNone } from "react-icons/md";

const navLink = [
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
  {
    href: "/SellerPortal",
    label: "Seller portal",
  },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const showDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <nav>
      <div className="bg-white lg:container flex justify-between items-center py-2 rounded-md px-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="logo"
            className="rounded-md lg:mr-20 w-[34px] h-[44px]  md:w-[64px] md:h-[64px]"
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
          {/* Search Button */}
          <Link href="/UserOrder">
            <h1 className="bg-[#E5F6FD] p-[7px] md:p-[10px] rounded-full text-[#48B1DB]">
              <LuShoppingCart size={30} />
            </h1>
          </Link>

          {/* Notifications */}
          <Link href="#">
            <h1 className="bg-[#E5F6FD] p-[7px] md:p-[10px] rounded-full text-[#48B1DB]">
              <MdOutlineNotificationsNone size={30} />
            </h1>
          </Link>

          {/* Login Button */}
          <Link href="/login" className="w-full">
            <Button className="bg-[#48B1DB] p-[10px] md:p-[20px] text-white text-[18px]">
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <Button
          type="text"
          size="large"
          className="md:hidden "
          icon={<MenuOutlined size={30} />}
          onClick={showDrawer}
        />
      </div>

      {/* Mobile Drawer with Links */}
      <Drawer
        placement="left"
        closable={true}
        onClose={closeDrawer}
        visible={isDrawerOpen}
        width={200}
      >
        <ul className="space-y-4 ">
          {navLink.map((link) => (
            <li key={link.href} className="text-[18px] " onClick={closeDrawer}>
              <ActiveLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>
      </Drawer>
    </nav>
  );
};

export default Navbar;