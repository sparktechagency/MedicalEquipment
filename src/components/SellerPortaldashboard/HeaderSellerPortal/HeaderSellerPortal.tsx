"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { useGetUserQuery } from "@/redux/features/Profile/Profile";

const HeaderSellerPortal = () => {
  const { data,  } = useGetUserQuery({});
    const userData = data?.attributes?.user;
    const [name , setName] = useState(null)
    const [role, setRole]  = useState(null)
    const [profileImage, setProfileImage] = useState<string | null>(null);
  
    useEffect(() => {
      if (userData) {
        setRole(userData.role)
        setName(userData.name)
        setProfileImage(
          userData.image ? `${userData.image}` : null
        );
      }
    }, [userData]);

  

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
          src={profileImage || ""}  
          alt="Profile"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="text-white">
          <div className="font-medium">{name}</div>
          <div className="text-sm capitalize">{role}</div>
        </div>
      </Link>
    </div>
  );
};

export default HeaderSellerPortal;

