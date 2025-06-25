"use client";
import Link from "next/link";
import { Form, Checkbox, Select, message } from "antd";
import InputComponent from "@/components/UI/InputComponent";
import { FaLock, FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiPhone } from "react-icons/gi";

// import imageLogo from "@/assets/logo/Logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { useRouter } from "next/router";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  phone: number;
  role: string;
  address: string;
}

const Register: React.FC = () => {
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const onFinish = async(values: RegisterFormValues) => {
    const registrationData = { ...values };
    try {
      const res = await register(registrationData).unwrap();
      //  console.log(res)
      if (res?.code === 200) {
        message.success(`${res?.message}`);
        router?.push("/");
      }
    } catch (error) {
      console.error(error);
    }
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
              <Form layout="vertical" onFinish={onFinish} className="space-y-3">
                <Form.Item
                  label={<span className=""> Name</span>}
                  name="name"
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
                  name="role"
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
                  name="phone"
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
                <Form.Item  valuePropName="checked">
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
