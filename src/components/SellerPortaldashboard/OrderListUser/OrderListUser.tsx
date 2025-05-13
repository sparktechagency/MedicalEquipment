"use client";
import React, { useState, useMemo, useEffect } from "react";
import { Modal, Space, Table, ConfigProvider, DatePicker, Spin } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import dayjs, { Dayjs } from "dayjs";
import Link from "next/link";

// Define the type for the product data
interface Product {
  key: number;
  sl: string;
  productName: string;
  category: string;
  price: string;
  bidPrice: string;
  timeAndDate: string;
  useImage: string;
  userName: string;
  email: string;
  status: string;
}

// Define the type for the selected product in the modal
interface SelectedProduct extends Product {}

// Define unique categories for tabs
const CATEGORIES = [
  "Diagnostic Equipment",
  "Surgical Tools",
  "Monitoring Systems",
] as const;

const OrderListUser: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] =
    useState<SelectedProduct | null>(null);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [activeTab, setActiveTab] = useState<string>(CATEGORIES[0]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedProduct(null);
  };

  const showModal = (record: Product) => {
    setSelectedProduct(record);
    setIsModalVisible(true);
  };

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    const dataSource: Product[] = [
      {
        key: 1,
        sl: "01",
        productName: "GE Vivid S70 Ultrasound Machine",
        category: "Diagnostic Equipment",
        price: "$800",
        bidPrice: "$800",
        timeAndDate: "11 Oct 24, 11:10 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Bashar",
        email: "Support.info@Gmail.Com",
        status: "Progress",
      },
      {
        key: 2,
        sl: "01",
        productName: "GE Vivid S70 Ultrasound Machine",
        category: "Surgical Tools",
        price: "$800",
        bidPrice: "$800",
        timeAndDate: "11 Oct 24, 11:10 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Bashar",
        email: "Support.info@Gmail.Com",
        status: "Progress",
      },
      {
        key: 3,
        sl: "01",
        productName: "GE Vivid S70 Ultrasound Machine",
        category: "Diagnostic Equipment",
        price: "$800",
        bidPrice: "$800",
        timeAndDate: "11 Oct 24, 11:10 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Bashar",
        email: "Support.info@Gmail.Com",
        status: "Pending",
      },
      {
        key: 4,
        sl: "01",
        productName: "GE Vivid S70 Ultrasound Machine",
        category: "Surgical Tools",
        price: "$800",
        bidPrice: "$800",
        timeAndDate: "11 Oct 24, 11:10 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Bashar",
        email: "Support.info@Gmail.Com",
        status: "Pending",
      },
      {
        key: 5,
        sl: "01",
        productName: "GE Vivid S70 Ultrasound Machine",
        category: "Monitoring Systems",
        price: "$800",
        bidPrice: "$800",
        timeAndDate: "11 Oct 24, 11:10 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Bashar",
        email: "Support.info@Gmail.Com",
        status: "Pending",
      },
      {
        key: 6,
        sl: "01",
        productName: "GE Vivid S70 Ultrasound Machine",
        category: "Surgical Tools",
        price: "$800",
        bidPrice: "$800",
        timeAndDate: "11 Oct 24, 11:10 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Bashar",
        email: "Support.info@Gmail.Com",
        status: "Complete",
      },
      {
        key: 7,
        sl: "01",
        productName: "GE Vivid S70 Ultrasound Machine",
        category: "Diagnostic Equipment",
        price: "$800",
        bidPrice: "$800",
        timeAndDate: "11 Oct 24, 11:10 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Bashar",
        email: "Support.info@Gmail.Com",
        status: "Complete",
      },
      {
        key: 8,
        sl: "01",
        productName: "GE Vivid S70 Ultrasound Machine",
        category: "Diagnostic Equipment",
        price: "$800",
        bidPrice: "$800",
        timeAndDate: "11 Oct 24, 11:10 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Bashar",
        email: "Support.info@Gmail.Com",
        status: "Cancel",
      },
    ];

    return dataSource.filter((product) => {
      const productDate = dayjs(product.timeAndDate, "DD MMM YY, hh:mm A");
      const isDateMatch = selectedDate
        ? productDate.isSame(selectedDate, "day")
        : true;
      const isCategoryMatch = activeTab ? product.category === activeTab : true;
      return isDateMatch && isCategoryMatch;
    });
  }, [selectedDate, activeTab]);

  const columns = [
    { title: "#SL", dataIndex: "sl", key: "sl" },
    {
      title: "Bidder Name",
      key: "userInfo",
      render: (_: unknown, record: Product) => (
        <div className="flex items-center space-x-2">
          <Image
            width={30}
            height={30}
            src={record.useImage}
            alt={`${record.userName}'s profile image`}
            className="rounded-full"
            onError={(e) => (e.currentTarget.src = "/fallback-image.png")}
          />
          <span>{record.userName}</span>
        </div>
      ),
    },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Product Name", dataIndex: "productName", key: "productName" },
    { title: "Bid Price", dataIndex: "bidPrice", key: "bidPrice" },
    { title: "Bid Time & Date", dataIndex: "timeAndDate", key: "timeAndDate" },
    {
      title: "Status",
      key: "status",
      render: (_: unknown, record: Product) => (
        <span
          className={`px-2 py-1 rounded-full text-white ${
            record.status === "Progress"
              ? "bg-orange-500"
              : record.status === "Pending"
              ? "bg-yellow-500"
              : record.status === "Complete"
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {record.status}
        </span>
      ),
    },
    {
      title: "Actions",
      key: "action",
      render: (_: unknown, record: Product) => (
        <Space size="middle">
          <InfoCircleOutlined
            onClick={() => showModal(record)}
            className="text-lg cursor-pointer"
            aria-label={`View details for ${record.productName}`}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="w-full rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-xl">User Order List</h2>
        <DatePicker
          onChange={handleDateChange}
          format="DD MMM YY"
          className="w-40"
        />
      </div>

      <div className="flex space-x-3 mb-4">
        {CATEGORIES.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeTab === tab
                ? "bg-[#48B1DB] text-white"
                : "bg-[#EEF9FE] text-[#48B1DB] border border-[#48B1DB] hover:bg-blue-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <ConfigProvider
        theme={{
          token: { colorBgContainer: "#EEF9FE", colorPrimary: "#1890ff" },
          components: {
            Table: {
              headerBg: "#48B1DB",
              headerColor: "#000000",
              headerBorderRadius: 2,
            },
          },
        }}
      >
        <Spin spinning={loading} tip="Loading data..." size="large">
          <Table
            columns={columns}
            dataSource={filteredData}
            pagination={{ pageSize: 10, position: ["bottomCenter"] }}
            scroll={{ x: 1000 }}
            rowKey="key"
          />
        </Spin>
      </ConfigProvider>

      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        title={
          <h1 className="text-center text-xl font-semibold text-gray-500">
            User Order List
          </h1>
        }
      >
        {selectedProduct && (
          <div className="p-5 text-black">
            <div className="flex justify-between py-3 border-t-2 border-gray-400">
              <p>Product Name:</p>
              <p>{selectedProduct.productName}</p>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-400">
              <p>Category:</p>
              <p>{selectedProduct.category}</p>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-400">
              <p>Price:</p>
              <p>{selectedProduct.price}</p>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-400">
              <p>Bid Price:</p>
              <p>{selectedProduct.bidPrice}</p>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-400">
              <p>Time & Date:</p>
              <p>{selectedProduct.timeAndDate}</p>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-400">
              <p>User Name:</p>
              <p>{selectedProduct.userName}</p>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-400">
              <p>Email:</p>
              <p>{selectedProduct.email}</p>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-400">
              <p>Status:</p>
              <p>{selectedProduct.status}</p>
            </div>
          </div>
        )}

        <Link
          href={`/OrderListUser/${selectedProduct?.key}`}
          className="flex justify-end"
        >
          <button
            className="bg-[#48B1DB] text-white py-2 px-4 rounded-md"
            onClick={() => console.log("Cancel")}
          >
            Sending Product
          </button>
        </Link>
      </Modal>
    </div>
  );
};

export default OrderListUser;
