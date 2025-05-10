
import Image from "next/image";

const UserProfilesImage = () => {
  return (
    <div>
      <div className="bg-custom-gradient w-full h-[150px] rounded-tl-[120px] md:rounded-tl-[90px] rounded-md">
        {/* Avatar and Profile Info */}
        <div className="flex items-center p-9 md:p-8 space-x-5">
          {/* Avatar Image or Placeholder */}
          <Image
            width={100}
            height={100}
            src={""} // Show uploaded image or placeholder
            alt="Avatar"
            className="ml-4 md:ml-0 w-24 h-24 rounded-full border-4 border-white"
          />
          <div>
            <h2 className="text-white text-xl md:text-2xl font-semibold">My Product History </h2>
            <p className="text-white text-sm">
              Manage Products.
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default UserProfilesImage;
