"use client";
import { useState } from "react";
import logo from "@/assets/logo/logo.gif";
import Image from "next/image";
import ActiveLink from "./ActiveLink"; // Assuming this component works fine
import Link from "next/link";
import { Drawer, Button, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
// import { useRouter } from "next/navigation";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";

const navLink = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about-us",  // Ensure the href includes the full path
    label: "About us",
  },
  {
    href: "/contact-us",  // Ensure the href includes the full path
    label: "Contact us",
  },
];

const Navbar = () => {
  // const router = useRouter();
  const user = {
    name: "John Doe",
    avatar: "/avatar.jpg", // Replace with actual avatar URL
    email: "john.doe@example.com",
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const showDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const menuItems = [
    {
      key: "3",
      label: <div className="cursor-pointer px-4 py-1">Logout</div>,
    },
  ];

  return (
    <nav>
      <div className="lg:container flex justify-between items-center bg-[#FBE9E9] py-2 px-3 ">

        {/* logo */}
        <Link href="/">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="logo"
            className="rounded-md lg:mr-20"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-1">
          {navLink.map((link) => (
            <li key={link.href}>
              <ActiveLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>

        {/* Create job button */}
        {user ? (
          <div className="flex justify-between items-center mg:gap-4 lg:gap-8 gap-2">

            {/* Create Job Button */}
            <Link href="/jobpost">
              <Button className="rounded-[4px] md:px-6 px-2 md:py-5 py-2 bg-[#DB2424] text-white border-none hover:bg-[#b61f1f]">
               Job History
              </Button>
            </Link>

            {/* Search Button */}
            <Link href="#">
              <h1 className="bg-[#F4BBBB] md:p-[10px] p-[4px] rounded-full text-red-400">
                <IoSearchSharp size={30} />
              </h1>
            </Link>

            {/* Notifications Button */}
            <Link href="#">
              <h1 className="bg-[#F4BBBB] md:p-[10px] p-[4px] rounded-full text-red-400">
                <IoIosNotifications size={30} />
              </h1>
            </Link>

            {/* User Avatar Dropdown */}
            <Dropdown
              menu={{ items: menuItems }}
              placement="top"
              arrow
            >
              {user?.avatar && (
                <Image
                  width={48}
                  height={48}
                  src={user.avatar}
                  alt="User Image"
                  className="rounded-full cursor-pointer ring ring-[#F4BBBB]"
                />
              )}
            </Dropdown>
          </div>
        ) : (
          <div>
            <Link href="/login" className="w-full">
              <Button>Login</Button>
            </Link>
          </div>
        )}

        {/* Mobile Drawer Button */}
        <Button
          type="text"
          className="md:hidden"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        />

        {/* Drawer for Mobile Navigation */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          open={isDrawerOpen}
        >
          <ul className="flex flex-col gap-4">
            {navLink.map((link) => (
              <li key={link.href}>
                <ActiveLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            {user.name ? (
              <>
                {/* <Link href="/profile">
                  <button className="px-8 py-3 border border-red-500 text-red-500 rounded">
                    Profile
                  </button>
                </Link> */}
                <Link href="/logout">
                  <button className="text-white bg-red-500 px-10 py-3 rounded">
                    Logout
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className="text-white bg-red-500 hover:bg-red-500 px-10 py-3 rounded">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="px-8 py-3 border border-red-500 text-red-500 rounded">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
