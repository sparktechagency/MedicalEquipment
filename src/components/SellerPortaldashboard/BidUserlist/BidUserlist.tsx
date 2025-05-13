"use client";
import React, { useState, useMemo, useEffect } from "react";
import { Modal, Space, Table, ConfigProvider, DatePicker, Spin } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import dayjs, { Dayjs } from "dayjs";

// Define the type for the product data
interface Product {
  key: string;
  sl: string;
  productName: string;
  category: string;
  price: string;
  bidPrice: string;
  timeAndDate: string;
  useImage: string;
  userName: string;
}

// Define the type for the selected product in the modal
interface SelectedProduct extends Product {}

// Define unique categories for tabs
const CATEGORIES = [
  "Diagnostic Equipment",
  "Surgical Tools",
  "Monitoring Systems",
] as const;

const BidUserlist: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] =
    useState<SelectedProduct | null>(null);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [activeTab, setActiveTab] = useState<string>(CATEGORIES[0]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state for table

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

  // Simulate API fetch for initial data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // In a real app, replace with actual API call
        // const response = await fetch('/api/products');
        // const data = await response.json();
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Run once on mount

  // Memoized filtered data with dataSource defined inside
  const filteredData = useMemo(() => {
    const dataSource: Product[] = [
      {
        key: "1",
        sl: "01",
        productName: "GE Vivid S70 Ultrasound Machine",
        category: "Diagnostic Equipment",
        price: "$200",
        bidPrice: "$210",
        timeAndDate: "11 Oct 24, 11:10 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "John Doe",
      },
      {
        key: "2",
        sl: "02",
        productName: "Philips HeartStart Defibrillator",
        category: "Monitoring Systems",
        price: "$300",
        bidPrice: "$320",
        timeAndDate: "12 Oct 24, 10:30 AM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Jane Smith",
      },
      {
        key: "3",
        sl: "03",
        productName: "Surgical Scalpel Set",
        category: "Surgical Tools",
        price: "$50",
        bidPrice: "$60",
        timeAndDate: "13 Oct 24, 09:15 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "John Doe",
      },
      {
        key: "4",
        sl: "04",
        productName: "Philips Ultrasound System",
        category: "Diagnostic Equipment",
        price: "$800",
        bidPrice: "$850",
        timeAndDate: "14 Oct 24, 10:00 AM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Alice Johnson",
      },
      {
        key: "5",
        sl: "05",
        productName: "NIBP Monitor",
        category: "Monitoring Systems",
        price: "$500",
        bidPrice: "$530",
        timeAndDate: "15 Oct 24, 02:30 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Bob Brown",
      },
      {
        key: "6",
        sl: "06",
        productName: "Laparoscopic Surgical Instruments Set",
        category: "Surgical Tools",
        price: "$250",
        bidPrice: "$270",
        timeAndDate: "16 Oct 24, 01:45 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Charlie Davis",
      },
      {
        key: "7",
        sl: "07",
        productName: "Siemens X-ray Machine",
        category: "Diagnostic Equipment",
        price: "$1500",
        bidPrice: "$1600",
        timeAndDate: "17 Oct 24, 04:10 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "David Wilson",
      },
      {
        key: "8",
        sl: "08",
        productName: "Patient Monitoring System",
        category: "Monitoring Systems",
        price: "$1200",
        bidPrice: "$1250",
        timeAndDate: "18 Oct 24, 11:25 AM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Eve Clark",
      },
      {
        key: "9",
        sl: "09",
        productName: "Surgical Scissors Set",
        category: "Surgical Tools",
        price: "$75",
        bidPrice: "$80",
        timeAndDate: "19 Oct 24, 07:40 AM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Frank Harris",
      },
      {
        key: "10",
        sl: "10",
        productName: "Sonosite Edge II Ultrasound",
        category: "Diagnostic Equipment",
        price: "$2200",
        bidPrice: "$2300",
        timeAndDate: "20 Oct 24, 09:05 AM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Grace Adams",
      },
      {
        key: "11",
        sl: "11",
        productName: "Oxygen Concentrator",
        category: "Monitoring Systems",
        price: "$600",
        bidPrice: "$650",
        timeAndDate: "21 Oct 24, 08:50 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Hannah King",
      },
      {
        key: "12",
        sl: "12",
        productName: "Surgical Clamp Set",
        category: "Surgical Tools",
        price: "$120",
        bidPrice: "$140",
        timeAndDate: "22 Oct 24, 02:15 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Isabella Lee",
      },
      {
        key: "13",
        sl: "13",
        productName: "MRI Scanner",
        category: "Diagnostic Equipment",
        price: "$3000",
        bidPrice: "$3100",
        timeAndDate: "23 Oct 24, 04:50 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Jack Martin",
      },
      {
        key: "14",
        sl: "14",
        productName: "ECG Machine",
        category: "Monitoring Systems",
        price: "$900",
        bidPrice: "$950",
        timeAndDate: "24 Oct 24, 10:05 AM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Kathy Walker",
      },
      {
        key: "15",
        sl: "15",
        productName: "Sterile Surgical Needles Set",
        category: "Surgical Tools",
        price: "$45",
        bidPrice: "$50",
        timeAndDate: "25 Oct 24, 12:30 PM",
        useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
        userName: "Leo Scott",
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
      title: "User Info",
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
    { title: "Product Name", dataIndex: "productName", key: "productName" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Bid Price", dataIndex: "bidPrice", key: "bidPrice" },
    { title: "Time & Date", dataIndex: "timeAndDate", key: "timeAndDate" },
    {
      title: "Action",
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
        <h2 className="font-semibold text-xl">Bid User List</h2>
        <DatePicker
          onChange={handleDateChange}
          format="DD MMM YY"
          className="w-40"
        />
      </div>

      {/* Tabs */}
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

      {/* Modal */}
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        title={
          <h1 className="text-center text-xl font-semibold text-gray-500">
            Product Details
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
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BidUserlist;
