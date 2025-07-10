/* eslint-disable @typescript-eslint/no-explicit-any */
// import google from "@/assets/Authentication/google.png";
"use client";
import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const SignInWithGoogle = () => {
  const handleLogin = (response: any) => {
    console.log(response);

    console.log(`Google login successful:`, response);
    
  };
   
  const handleError = () => {
    console.log("Google login failed");
  };


  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
      <div className="flex items-center justify-center mx-auto mt-5">
        {/* <div>Sign in with Google</div> */}
      <GoogleLogin
        onSuccess={handleLogin}
        onError={handleError}
      />
      </div>
    </GoogleOAuthProvider>
  );
};
 
export default SignInWithGoogle;