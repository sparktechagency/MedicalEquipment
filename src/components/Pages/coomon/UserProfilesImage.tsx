"use client";

import { useEffect, useState } from "react";
import { useGetUserQuery } from "@/redux/features/Profile/Profile";
import Image from "next/image";

const UserProfilesImage = () => {
  const { data } = useGetUserQuery({});
  const user = data?.attributes?.user;

  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setProfileImage(
        user.image ? `${process.env.NEXT_PUBLIC_BASE_URL}/${user.image}` : null
      );
    }
  }, [user]);

  return (
    <div>
      <div className="bg-custom-gradient w-full h-[150px] rounded-tl-[120px] md:rounded-tl-[90px] rounded-md">
        {/* Avatar and Profile Info */}
        <div className="flex items-center p-6 sm:p-9 md:p-8 space-x-5">
          {/* Avatar Image or Placeholder */}
          <Image
            width={100}
            height={100}
            src={
              profileImage ||
              "/placeholder-user.png" // Replace with your default placeholder path
            }
            alt="Avatar"
            className="ml-4 md:ml-0 w-24 h-24 rounded-full border-4 border-white object-cover"
          />
          <div>
            <h2 className="text-white text-base md:text-2xl font-semibold">
              My Product History
            </h2>
            <p className="text-white text-sm">Manage Products.</p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default UserProfilesImage;
