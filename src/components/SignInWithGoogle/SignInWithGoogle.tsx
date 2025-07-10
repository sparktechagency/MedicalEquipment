/* eslint-disable @typescript-eslint/no-explicit-any */
// import google from "@/assets/Authentication/google.png";
"use client";
import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const SignInWithGoogle = () => {
  const handleLogin = (response: any) => {
    console.log(response);
    
  };
   
  const handleError = () => {
    console.log("Google login failed");
  };


  return (
    <GoogleOAuthProvider clientId="26923651394-ofin3np9rm8j30nvek8l4r5dub4tie9c.apps.googleusercontent.com">
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