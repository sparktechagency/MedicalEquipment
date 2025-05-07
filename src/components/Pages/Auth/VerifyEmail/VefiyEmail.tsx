"use client";
import InputComponent from "@/components/UI/InputComponent";
import { Form } from "antd";
import { useRouter } from "next/navigation";

interface OTPFormValues {
  otp: string;
}

const VerifyEmail: React.FC = () => {
    const router = useRouter();
  const onFinish = (values: OTPFormValues) => {
    console.log("OTP Verification Data: ", values);
    // Assuming the OTP verification is successful
    router.push("/reset-password");
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
                  className="space-y-5"
                >
                  <Form.Item
                    name="otp"
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

export default VerifyEmail;
