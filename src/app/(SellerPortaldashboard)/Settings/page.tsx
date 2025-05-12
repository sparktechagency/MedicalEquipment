import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Link href="/changepass">
        <div className="flex justify-between items-center bg-[#E5F6FD] p-4 rounded-md">
          <h2 className=" font-semibold">Change Password</h2>
          <span className="text-xl">&rarr;</span>
        </div>
      </Link>
    </div>
  );
};

export default Page;
