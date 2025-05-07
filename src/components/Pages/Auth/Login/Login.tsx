"use client";
import Image from "next/image";
import Link from "next/link";
import { Form, Checkbox, message } from "antd";
import { useRouter } from "next/navigation";
import InputComponent from "@/components/UI/InputComponent";
import google from "@/assets/Authentication/google.png";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import imageLogo from "@/assets/logo/Logo.png";


interface LoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}

const Login: React.FC = () => {
  const router = useRouter();
  const onFinish = (values: LoginFormValues) => {
    console.log("Login Data: ", values);
    message.success("Logged in successfully");
    router.push("/");
  };

  return (
    <section className="w-[90%] mx-auto h-[90vh] px-4 py-10 md:px-6 lg:px-10 mt-10 rounded-md">

      <div className="w-full h-full px-4 py-10 md:px-6 lg:px-10">
      <div className="w-full  mx-auto">
          {/* Form Content */}
          <div className="w-full md:max-w-[510px] mx-auto md:px-4 px-0">
            <div className="bg-[#EEF9FE] shadow-lg rounded-lg border-[3px] border-white">
              <div className="px-6 py-3 md:py-5 md:px-8 lg:px-10">
                <Image
                  src={imageLogo}
                  alt="Logo"    
                  width={150}
                  height={150}
                  className="mx-auto"
                />
                <Form
                  layout="vertical"
                  onFinish={onFinish}
                  className="space-y-3"
                >
                  <Form.Item
                    label={<span className="">Email</span>}
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <InputComponent icon={MdEmail} placeholder="Email" />
                  </Form.Item>
                  <Form.Item
                    label={<span className="">Password</span>}
                    name="password"
                    rules={[
                      { required: true, message: "Please enter your password" },
                    ]}
                  >
                    <InputComponent placeholder="Password" icon={FaLock} isPassword={true} />
                  </Form.Item>
                  <div className="flex justify-between items-center ">
                    <Form.Item name="remember" valuePropName="checked" >
                      <Checkbox className="">Remember me</Checkbox>
                    </Form.Item>
                    <Link
                      href="/forgot-password"
                      className="hover:underline -mt-5"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <button className="w-full px-5 py-3 bg-[#48B1DB] rounded text-white">
                    Log In
                  </button>
                </Form>
                <div className="mt-3 text-center font-bold">
                  <span className="">
                  Already have an account? 
                  </span>
                  <Link
                    href="/register"
                    className=" font-semibold hover:underline ml-1"
                  >
                  Sign Up
                  </Link>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  <div className="border border-black md:w-[30%] w-[25%]"></div>
                  <h1 className=" md:text-xl" >Or login with</h1>
                  <div className="border-black border md:w-[30%] w-[25%]"></div>
                </div>
                <Image 
                className="mx-auto mt-3"
                    src={google}  
                    width={50}                    
                    height={50}                   
                    alt="google"                   
                  />
              </div>
            </div>
          </div>
      </div>
      </div>
      
  </section>
  );
};

export default Login;
