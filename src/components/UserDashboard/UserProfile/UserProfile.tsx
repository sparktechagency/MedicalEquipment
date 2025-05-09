const UserProfile = () => {
    return (
      <div>
        {/* Profile Header Section with Custom Gradient Background */}
        <div className="bg-custom-gradient w-full h-[150px]  rounded-tl-[100px] rounded-md">
          {/* Avatar and Profile Info */}
          <div className="flex items-center p-8 space-x-5">
            <img
              src="https://via.placeholder.com/80" // Replace with actual avatar image URL
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-4 border-white"
            />
            <div>
              <h2 className="text-white text-2xl font-semibold">John Doe</h2>
              <p className="text-white text-sm">Update your profile and personal details.</p>
            </div>
          </div>
        </div>
  
        {/* Additional Content Section */}
        <div className="p-4">
           
        </div>
      </div>
    );
  };
  
  export default UserProfile;
  