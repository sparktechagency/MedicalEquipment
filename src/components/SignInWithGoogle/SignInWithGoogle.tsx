/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useGoogleLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "sonner";


const SignInWithGoogle = () => {
  const [googleLogin] = useGoogleLoginMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleLogin = async(response: any) => {
    // console.log(response);
    const data = response;
    try { 
     const response = await googleLogin(data).unwrap();
      console.log("Google login successful:", response);
      console.log("Google login token:", response?.data?.attributes?.tokens?.access?.token);
      if (response.code === 200) {  
          toast.success(`${response?.message}`);
          const { email, name, id, image, address, role, phone, } = response?.data?.attributes?.user;
          const finalUserData = { email, name, id, image, address, role, phone,  };
          dispatch(setUser({ user: finalUserData, token: response?.data?.attributes?.tokens?.access?.token }));
          router?.push("/");
      }

    } catch (error) {
      console.error("Error during Google login:", error);
    }
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