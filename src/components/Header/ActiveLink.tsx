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
      className={`text-[17px] mx-5 ${isActive ? "text-[#48B1DB] border-b-[2px] border-[#48B1DB]" : "text-black"}`}
    >
      {label}
    </Link>
  );
};

export default ActiveLink;