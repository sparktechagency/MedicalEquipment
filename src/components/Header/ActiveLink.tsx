"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface IActiveProps {
  label: string;
  href: string;
}

const ActiveLink = ({ label, href }: IActiveProps) => {
  const pathName = usePathname();
  
  // Ensure that trailing slashes do not affect the active comparison
  const isActive = pathName?.replace(/\/$/, "") === href?.replace(/\/$/, "");

  return (
    <Link
      href={href}
      className={`text-[17px] lg:p-4 p-2 ${isActive ? "text-gray-950 border-b-[5px] border-red-500" : "text-gray-500"}`}
    >
      {label}
    </Link>
  );
};

export default ActiveLink;