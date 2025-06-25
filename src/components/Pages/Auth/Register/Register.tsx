"use client";
import Link from "next/link";
import { Form, Checkbox, Select, message } from "antd";
import InputComponent from "@/components/UI/InputComponent";
import { FaLock, FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiPhone } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";

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

  // Show loading state while the API request is being processed
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle form submission
  const onsubmit = async (values: RegisterFormValues) => {
    // Construct the registration data from form values
    const registrationData = {
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      role: values.role,
      address: values.address,
    };

    try {
      // Make the API call to register the user
      const res = await register(registrationData).unwrap();

      // Check for successful registration and redirect to verify-email page
      if (res?.code === 201) {
        // email pass query params
        router.push(`/verify-email?email=${values.email}`);
        message.success("Registration successful.");
      } else {
        message.error("Registration failed. Please try again."); // Handle unexpected responses
      }
    } catch (error) {
      console.error(error);
      message.error("Registration failed. Please try again."); // Handle API error
    }
  };

  return (
    <section className="w-[90%] mx-auto md:px-6 lg:px-10 rounded-md my-10">
      <h1 className="text-center text-[40px] font-bold">
        <span className="text-[#48B1DB] font-bold">Sign Up</span> With Email
      </h1>
      <p className="text-center pb-5">Welcome Back! Please enter your details.</p>
      <div className="w-full max-w-7xl mx-auto">
        {/* Form Content */}
        <div className="w-full max-w-[450px] mx-auto px-4 md:px-0">
          <div className="bg-[#BADAEB40] shadow-lg rounded-lg">
            <div className="px-6 py-3 md:px-8 lg:px-10">
              <Form layout="vertical" onFinish={onsubmit} className="space-y-3">
                <Form.Item
                  label={<span>Name</span>}
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your full name",
                    },
                  ]}
                >
                  <InputComponent placeholder="Enter Name" icon={FaUserCircle} />
                </Form.Item>

                <Form.Item
                  label={<span>Set Your Role</span>}
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
                  label={<span>Phone</span>}
                  name="phone"
                  rules={[{ required: true, message: "Please enter your Phone" }]}
                >
                  <InputComponent placeholder="Enter Number" icon={GiPhone} />
                </Form.Item>

                <Form.Item
                  label={<span>Email</span>}
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <InputComponent placeholder="Enter Email" icon={MdEmail} />
                </Form.Item>

                <Form.Item
                  label={<span>Address</span>}
                  name="address"
                  rules={[
                    { required: true, message: "Please enter your address" },
                  ]}
                >
                  <InputComponent placeholder="Enter Address" icon={FaLocationDot} />
                </Form.Item>

                <Form.Item
                  label={<span>Password</span>}
                  name="password"
                  rules={[{ required: true, message: "Please enter your password" }]}
                >
                  <InputComponent placeholder="Enter Password" isPassword={true} icon={FaLock} />
                </Form.Item>

                <Form.Item valuePropName="checked">
                  <Checkbox>
                    I accept the Terms of Service and Privacy Policy.
                  </Checkbox>
                </Form.Item>

                <button className="w-full px-5 py-3 bg-[#48B1DB] rounded">
                  Sign up
                </button>
              </Form>

              <div className="mt-2 text-center font-bold">
                <span>Already have an account?</span>
                <Link href="/login" className="font-semibold hover:underline ml-1">
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
