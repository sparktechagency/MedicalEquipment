import Login from "@/components/Pages/Auth/Login/Login";
import React, { Suspense } from "react";
export const metadata = {
  title: "Login | Medical Equipment",
  description: "This is the login page for our application",
  keywords: ["login", "page", "example"],
};
const LoginPage = () => {
  return <div>
  <Suspense fallback={<div>Loading...</div>}>
   <Login />
</Suspense>
</div>
};

export default LoginPage;
