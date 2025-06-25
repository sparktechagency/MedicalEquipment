"use client";
import InputComponent from "@/components/UI/InputComponent";
import { useVerifyEmailMutation } from "@/redux/features/auth/authApi";
import { Form, message } from "antd";
import { useRouter, useSearchParams } from "next/navigation";

interface OTPFormValues {
  code: string;
}

const VerifyForgot: React.FC = () => {
  const router = useRouter();
  const [otp] = useVerifyEmailMutation();
  const searchParams = useSearchParams();
  const email = searchParams.get('email'); 
  
  const onFinish =  async(values: OTPFormValues) => {
       const data  = {
        email,
        code:values.code
       }
    try {
     const res = await otp(data).unwrap();
     console.log(res)
      if (res?.code === 200) {
        message.success("OTP verified successfully.");
        router.push(`/reset-password?email=${email}`);
      }
    } catch (error) {
      console.error(error);
    }
    
    
  };

  return (
    <section className=" w-[90%] mx-auto h-[90vh] px-4 py-10 md:px-6 lg:px-10  my-10">
      <div className="w-full max-w-7xl mx-auto">
          {/* OTP Form Content */}
          <div className="w-full max-w-[450px] mx-auto px-4 md:px-0">
            <div className="bg-[#BADAEB40] shadow-lg rounded-lg mt-40 ">
              <div className="px-6 py-8 md:px-8 lg:px-10">
                <h2 className="text-xl md:text-2xl font-semibold   text-center ">
                    Verify Email
                </h2>
                <p className="pb-3 text-center ">Please check your email and enter the code</p>
                <Form
                  layout="vertical"
                  onFinish={onFinish}
                  className="space-y-1 mt-3"
                >
                  <Form.Item
                    name="code"
                    rules={[
                      { required: true, message: "Please enter the OTP" },
                      { len: 6, message: "OTP must be 6 digits" },
                    ]}
                  >
                    <InputComponent
                      placeholder="Enter OTP"
                      className="w-full p-3"
                    />
                  </Form.Item>
                  <button className="w-full px-5 py-3 rounded bg-[#48B1DB] text-white">
                    Verify
                  </button>
                </Form>
                <div className="flex justify-between items-center my-4">
                  <h1 className="">Didnt receive code?</h1>
                  <button className="">
                  Resend
                  </button>
              </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default VerifyForgot;
