'use client';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useGetUserQuery } from '@/redux/features/Profile/Profile';

const SellerProfile: React.FC = () => {
  const { data,  } = useGetUserQuery({});
      const userData = data?.attributes?.user;
      const [name , setName] = useState(null)
      const [email, setEmail] = useState("");
        const [phone, setPhone] = useState("");
        const [address, setAddress] = useState("");
      const [profileImage, setProfileImage] = useState<string | null>(null);
    
      useEffect(() => {
        if (userData) {
          setEmail(userData.email)
          setPhone(userData.phone)
          setAddress(userData.address)
          setName(userData.name)
          setProfileImage(
            userData.image ? `${userData.image}` : null
          );
        }
      }, [userData]);

  return (
    <div className="w-full lg:px-5">
      {/* Back Button and Title */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center py-1 md:my-2 lg:my-6">
          <h1 className="text-2xl font-semibold ">
            Personal Information
          </h1>
        </div>
      </div>

      {/* Profile Information */}
      <div className="w-full md:w-[95%] lg:w-[50%] py-5 px-14 rounded-md bg-[#E5F6FD] h-full md:mt-1 mx-auto">
        {/* Profile Picture */}
        <div className="rounded-lg flex justify-center items-center flex-col">
          <div className="relative size-32 rounded-full overflow-hidden border">
            <Image
              src={
                profileImage || ''
              }
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Personal Details */}
        <form className="w-full col-span-full md:col-span-9 space-y-6 md:mt-10">
          <div className="space-y-1">
            <label className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              defaultValue={name || ''}
              readOnly
              className="w-full rounded-lg px-5 py-2 bg-white outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              defaultValue={email}
              readOnly
              className="w-full rounded-lg px-5 py-2 bg-white outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-semibold">Contact no</label>
            <input
              type="text"
              defaultValue={phone}
              readOnly
              className="w-full rounded-lg px-5 py-2 bg-white outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="block text-sm font-semibold">Address</label>
            <input
              type="text"
              defaultValue={address}
              readOnly
              className="w-full rounded-lg px-5 py-2 bg-white outline-none"
            />
          </div>
          <div className="flex justify-center">
            <Link href={`/sellerProfile/${1}`}>
              <button className="px-8 py-3 bg-[#48B1DB] text-white rounded-lg">
                Edit Profile
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellerProfile;

