import ForgotPassword from "@/components/Pages/Auth/ForgotPassword/ForgotPassword";
import React, { Suspense } from "react";

export const metadata = {
  title: "Forgot Password | Medical Equipment",
  description: "This is the forgot password page for our application",
  keywords: ["forgot password", "page", "example"], // Add these keywords under the 'metadata' type if needed
};

const ForgotPasswordPage = () => {
  return <div>
      <Suspense fallback={<div>Loading...</div>}>
    <ForgotPassword />
    </Suspense>
    </div>;
};

export default ForgotPasswordPage;
