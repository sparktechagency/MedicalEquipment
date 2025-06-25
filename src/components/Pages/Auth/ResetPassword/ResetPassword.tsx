"use client";
import { Form, message, Button } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useResitPasswordMutation } from "@/redux/features/auth/authApi";
import InputComponent from "@/components/UI/InputComponent";

interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string; // Include confirmPassword only for validation, not for submission
}

const ResetPassword: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  console.log(email);
  
  const [resetPassword] = useResitPasswordMutation();

  const onFinish = async (values: ResetPasswordFormValues) => {
    const { password } = values; // Only use the password field for the submission

    // If there's no email in the URL, show an error
    if (!email) {
      message.error("Email is missing.");
      return;
    }

    const data = {
      email,
      password, // Send only the password
    };

    try {
      const res = await resetPassword(data).unwrap();
      console.log(res);
      if (res?.code === 200) {
        message.success("Password reset successfully.");
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      message.error("An error occurred while resetting the password.");
    }
  };

  return (
    <section className="w-[90%] mx-auto h-[90vh] px-4 py-10 md:px-6 lg:px-10 my-10 rounded-md">
      <div className="w-full max-w-7xl mx-auto">
        {/* Reset Password Form Content */}
        <div className="w-full max-w-[450px] mx-auto px-4 md:px-0">
          <div className="bg-[#BADAEB40] shadow-lg rounded-lg mt-32">
            <div className="px-6 py-8 md:px-8 lg:px-10">
              <h2 className="text-xl md:text-2xl font-semibold text-center">
                Reset Password
              </h2>
              <p className="text-center pb-3">Your password must be 8-10 characters long.</p>
              <Form layout="vertical" onFinish={onFinish} className="space-y-5">
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please enter a new password" },
                    { min: 6, message: "Password must be at least 6 characters" },
                  ]}
                  hasFeedback
                >
                  <InputComponent
                    placeholder="New Password"
                    className="w-full p-3 border-b border-gray-300"
                  />
                </Form.Item>

                {/* Confirm Password validation (not sent in the request) */}
                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  dependencies={["password"]}
                  rules={[
                    { required: true, message: "Please confirm your new password" },
                    { min: 6, message: "Password must be at least 6 characters" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error("Passwords do not match"));
                      },
                    }),
                  ]}
                  hasFeedback
                >
                  <InputComponent
                    placeholder="Confirm New Password"
                    className="w-full p-3 border-b border-gray-300"
                  />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full py-3"
                >
                  Reset Password
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
