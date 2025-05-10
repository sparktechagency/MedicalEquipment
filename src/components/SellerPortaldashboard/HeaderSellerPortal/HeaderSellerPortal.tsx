import imageProfile from "@/assets/Sidebar/user.png";
import Image from "next/image";
const HeaderSellerPortal = () => {
  return (
    <div className="bg-[#48B1DB] p-3 flex items-center justify-end">
      {/* Left Side */}
      <div className="flex items-center">
        <Image
          src={imageProfile}
          alt="Profile"
          width={20}
          height={20}
          className="mr-4 w-14 h-14 rounded-full object-cover"
        />
      </div>

      {/* Right Side */}
      <div className=" text-white">
        <div className="mr-2">Hisham</div>
        <div className="text-sm">Admin</div>
      </div>
    </div>
  );
};

export default HeaderSellerPortal;
