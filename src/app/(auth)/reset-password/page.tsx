import ResetPassword from "@/components/Pages/Auth/ResetPassword/ResetPassword";
import React, { Suspense } from "react";
export const metadata = {
  title: "Reset Password | Medical Equipment",
  description: "This is the reset password page for our application",
  keywords: ["reset password", "page", "example"],
};
const ResetPasswordPage = () => {
  return <div>
  <Suspense fallback={<div>Loading...</div>}>
   <ResetPassword />
</Suspense>
</div>
};

export default ResetPasswordPage;
