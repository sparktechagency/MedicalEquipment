"use client";
import { Form, message } from "antd";
import { useRouter } from "next/navigation";
import InputComponent from "@/components/UI/InputComponent";
import { MdEmail } from "react-icons/md";


interface LoginFormValues {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const router = useRouter();

  const onFinish = (values: LoginFormValues) => {
    router.push(`/verify-email?email=${values.email}`);
    message.success("OTP has been sent to your email.");
  };

  return (
    <section className=" w-[90%] mx-auto h-[90vh] px-4 py-10 md:px-6 lg:px-1 my-10 rounded-md">
        <div className="w-full max-w-[710px] mx-auto px-4 md:px-0">
          <div className="bg-[#BADAEB40] shadow-lg rounded-lg   mt-40">
            <div className="px-6 py-8 md:px-8 lg:px-10">
              <h2 className="text-xl md:text-2xl font-semibold  pb-5 text-center">
                Forgot Your Password?
              </h2>
              <p className="pb-5  text-center">
                Please enter your Email to reset your password.
              </p>
              <Form<LoginFormValues> layout="vertical" onFinish={onFinish} className="space-y-5">
                <Form.Item
                  label={<span className="">Email</span>}
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                  className="custom-form-item"
                >
                  <InputComponent
                    icon={MdEmail}
                    placeholder="Enter your email"
                  />
                </Form.Item>
                <button className="w-full px-5 py-3 bg-[#48B1DB] rounded text-white">
                  Send OTP
                </button>
              </Form>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ForgotPassword;
