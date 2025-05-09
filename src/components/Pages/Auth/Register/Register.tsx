"use client";
import Link from "next/link";
import { Form, Checkbox, Select } from "antd";
import InputComponent from "@/components/UI/InputComponent";
import { FaLock, FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiPhone } from "react-icons/gi";

// import imageLogo from "@/assets/logo/Logo.png";
import { FaLocationDot } from "react-icons/fa6";

interface RegisterFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  remember: boolean;
}

const Register: React.FC = () => {
  const onFinish = (values: RegisterFormValues) => {
    const registrationData = { ...values };
    console.log("Registration Data: ", registrationData);
  };

  return (
    <section className=" w-[90%] mx-auto   md:px-6 lg:px-10  rounded-md my-10 ">
      <h1 className="text-center text-[40px] font-bold">
        <span className="text-[#48B1DB] font-bold">Sign Up</span> With Email
      </h1>
      <p className="text-center pb-5">
        Welcome Back! Please enter your details.
      </p>
      <div className="w-full max-w-7xl mx-auto">
        {/* Form Content */}
        <div className="w-full max-w-[450px] mx-auto px-4 md:px-0">
          <div className="bg-[#BADAEB40] shadow-lg rounded-lg ">
            <div className="px-6 py-3 md:px-8 lg:px-10">
              {/* <Image
                src={imageLogo}
                alt="Logo"
                width={150}
                height={150}
                className="mx-auto"
              /> */}

              <Form layout="vertical" onFinish={onFinish} className="space-y-3">
                <Form.Item
                  label={<span className=""> Name</span>}
                  name="fullName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your full name",
                    },
                  ]}
                >
                  <InputComponent
                    placeholder="Enter Name"
                    icon={FaUserCircle}
                  />
                </Form.Item>

                <Form.Item
                  label={<span>Set Your Roll</span>}
                  name="SetRoll"
                  rules={[
                    {
                      required: true,
                      message: "Please select your role",
                    },
                  ]}
                >
                  <Select className="" size="large" placeholder="Select Role">
                    <Select.Option value="user">User</Select.Option>
                    <Select.Option value="seller">Seller</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label={<span className=""> Phone</span>}
                  name="number"
                  rules={[
                    { required: true, message: "Please enter your Phone" },
                  ]}
                >
                  <InputComponent placeholder="Enter  Number" icon={GiPhone} />
                </Form.Item>
                <Form.Item
                  label={<span className="">Email</span>}
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <InputComponent placeholder="Enter Email" icon={MdEmail} />
                </Form.Item>
                <Form.Item
                  label={<span className="">Address</span>}
                  name="address"
                  rules={[
                    { required: true, message: "Please enter your address" },
                    { message: "Please enter a valid address" },
                  ]}
                >
                  <InputComponent
                    placeholder="Enter Address"
                    icon={FaLocationDot}
                  />
                </Form.Item>

                <Form.Item
                  label={<span className="">Password</span>}
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your password" },
                  ]}
                >
                  <InputComponent
                    placeholder="Enter Password"
                    isPassword={true}
                    icon={FaLock}
                  />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox className="">
                    I accept the Terms of Service and Privacy Policy.
                  </Checkbox>
                </Form.Item>
                <button className="w-full px-5 py-3 bg-[#48B1DB] rounded ">
                  Sign up
                </button>
              </Form>
              <div className="mt-2 text-center font-bold">
                <span className="">Already have an account?</span>
                <Link
                  href="/login"
                  className=" font-semibold hover:underline ml-1"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
