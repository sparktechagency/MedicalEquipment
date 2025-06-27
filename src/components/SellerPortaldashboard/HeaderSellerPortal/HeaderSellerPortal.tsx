"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoNotificationsCircleOutline } from "react-icons/io5";

const HeaderSellerPortal = () => {
  const [user, setUser] = useState<{ name?: string; role?: string; image?: string } | null>(null);

  useEffect(() => {
    const getUserData = () => {
      try {
        const persistAuth = localStorage.getItem("persist:auth");
        if (!persistAuth) return null;

        const authData = JSON.parse(persistAuth);
        if (!authData.user) return null;

        const userData = JSON.parse(authData.user);
        return { 
          name: userData.name, 
          role: userData.role,
          image: userData.image  // Added image extraction
        };
      } catch (err) {
        console.error("Error parsing user data:", err);
        return null;
      }
    };

    setUser(getUserData());
  }, []);

  return (
    <div className="bg-[#48B1DB] p-3 flex items-center justify-end space-x-4">
      {/* Notification */}
      <Link href="/SellerNotification">
        <div className="bg-white rounded-full p-3 cursor-pointer hover:shadow">
          <IoNotificationsCircleOutline
            className="text-[#48B1DB]"
            size={26}
          />
        </div>
      </Link>

      {/* Profile */}
      <Link href="/sellerProfile" className="flex items-center space-x-3">
        <Image
          src={user?.image ? `${process.env.NEXT_PUBLIC_BASE_URL}/${user?.image}` : ""}  
          alt="Profile"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="text-white">
          <div className="font-medium">{user?.name ?? "Unknown User"}</div>
          <div className="text-sm capitalize">{user?.role ?? "Role not found"}</div>
        </div>
      </Link>
    </div>
  );
};

export default HeaderSellerPortal;

