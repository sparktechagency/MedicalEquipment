/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Modal, Input } from "antd";  
import DemoPiechat from "./DemoPiechat";
import RecentSellingProducts from "./RecentSellingProducts";
import Status from "./Status";
import dynamic from "next/dynamic";
import { FaDollarSign } from "react-icons/fa";
import { useGetUserQuery } from "@/redux/features/Profile/Profile";
import { useBalanceWidrowCreateMutation } from "@/redux/features/Earnings/Earnings";
import Swal from "sweetalert2";

const Chart = dynamic(() => import("./PureComponentChart"), { ssr: false });

const DashboardPage = () => {
  const [withdrawAmount] = useBalanceWidrowCreateMutation();
  const { data } = useGetUserQuery({});
  const userData = data?.attributes?.user;

  

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errors, setErrors] = useState('');
  const [amount, setAmount] = useState<number>(0);

  // Function to show the modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to handle the modal cancel action
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Function to handle the modal OK action
  const handleOk = async () => {
    try {
      const data = { amount: amount };
      const res = await withdrawAmount(data);
      console.log(res);
      if (res?.data?.statusCode === 201) {

        setIsModalVisible(false);
        Swal.fire({
          title: "Success!",
          text: `${res?.data?.message}`,
          icon: "success",
        });
    }
      if (
        res?.error &&
        typeof res.error === "object" &&
        "data" in res.error &&
        (res.error as any).data?.message
      ) {
        setErrors((res.error as any).data.message);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="w-full px-2 lg:px-6">
      <div className="flex justify-between items-center py-3 md:pb-5 ">
        <h1 className="text-left text-[20px] font-semibold pb-2">Dashboard</h1>{" "}
        <button onClick={showModal} className="bg-[#48B1DB] text-white py-2 px-4 rounded text-xl">
          Withdrawal
        </button>
      </div>
      <Status />
      <br />
      <div className="w-full h-full md:h-[60vh] py-2 flex flex-col gap-4 md:flex-row justify-between items-center">
        {/* Left Column: Chart */}
        <div className="w-full lg:w-[74%] bg-[#EEF9FE] rounded-md p-5">
          <Chart />
        </div>
        {/* Right Column: Pie Chart */}
        <div className="w-full lg:w-[24%]">
          <DemoPiechat />
        </div>
      </div>
      <RecentSellingProducts />

      {/* Ant Design Modal for Withdrawal */}
      <Modal
        title="Withdraw Amount"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Withdraw"
        cancelText="Cancel"
      >
        <div className="flex ">
          <div className="w-full mr-2">
            <label htmlFor="amount">Current Balance</label>
            <div id="amount" className="mb-4 border p-[6px] text-xl font-bold w-full rounded-md">
              $ {userData?.currentBalance}
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="Income">Total Income</label>
            <div id="Income" className="mb-4 border p-[6px] text-xl font-bold w-full rounded-md">
              $ {userData?.totalIncome}
            </div>
          </div>
        </div>
        <label htmlFor="withdrawAmount">Enter Amount to Withdraw</label>
        <Input
          id="withdrawAmount"
          placeholder="Enter amount"
          value={amount}
          prefix={<FaDollarSign />}
          size="large"
          onChange={(e) => setAmount(Number(e.target.value))} 
          type="number"
          className="text-xl font-bold w-full rounded-md"
        />

        {/* Display error message as <p> tag */}
        {errors && (
          <p className="mt-4 text-red-500">{errors}</p>
        )}
      </Modal>
    </div>
  );
};

export default DashboardPage;
