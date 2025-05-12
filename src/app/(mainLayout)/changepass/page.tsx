import ChangePassword from "@/components/Pages/ChangePassword/changepassword";


const Page = () => {
 return (
    <div className="px-2 md:px-0">
      <div className="md:w-[30%] mx-auto py-5 lg:py-14">
         <h1 className="text-xl font-semibold py-5">Change Password</h1>
         <ChangePassword />
      </div>
    </div>
 );
};

export default Page;