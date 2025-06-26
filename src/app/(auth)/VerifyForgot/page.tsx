import VerifyForgot from "@/components/Pages/Auth/VerifyForgot/VerifyForgot";
import React, { Suspense } from "react";
export const metadata = {
  title: "Verify Email | Medical Equipment",
  description: "This is the verify Email page for our application",
  keywords: ["verify Email", "page", "example"],
};
const Page = () => {
 return (
 <div>
 <Suspense fallback={<div>Loading...</div>}>
  <VerifyForgot />
</Suspense>
 </div>
 );
};

export default Page;