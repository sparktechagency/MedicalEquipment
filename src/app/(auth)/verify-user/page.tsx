import VerifyEmail from "@/components/Pages/Auth/VerifyEmail/VefiyEmail";
import React, { Suspense } from "react";
export const metadata = {
  title: "Verify User | Medical Equipment",
  description: "This is the verify User page for our application",
  keywords: ["verify User", "page", "example"],
};
const VerifyEmailPage = () => {
  return <div>
  <Suspense fallback={<div>Loading...</div>}>
   <VerifyEmail />
</Suspense>
</div>;
};

export default VerifyEmailPage;
