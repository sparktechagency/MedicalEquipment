"use client";
import { useState } from "react";
import { Modal, Space, Table, ConfigProvider } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useGetBitAllQuery } from "@/redux/features/ProductManagement/ProductManagement";

// Define the type for the product data
interface Product {
  key: string;
  sl: string;
  productName: string;
  category: string;
  price: string;
  bidPrice: string;
  timeAndDate: string;
  useImage: string; // Added field for user image
  userName: string; // Added field for user name
}

// Define the type for the selected product in the modal
interface SelectedProduct {
  productName?: string;
  category?: string;
  price?: string;
  bidPrice?: string;
  timeAndDate?: string;
  useImage?: string; // Added field for user image in modal
  userName?: string; // Added field for user name in modal
}

const BidderLists: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);

  const {id} = useParams();
  const {data} = useGetBitAllQuery(id);
  console.log(data);

  // Updated dataSource with the new image URL
  const dataSource: Product[] = [
    {
      key: "1",
      sl: "01",
      productName: "GE Vivid S70 Ultrasound Machine",
      category: "Imaging Devices",
      price: "$200", // Placeholder since not provided in image
      bidPrice: "$800",
      timeAndDate: "11 Oct 24, 11:10PM",
      useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
      userName: "Bashar",
    },
    {
      key: "2",
      sl: "01",
      productName: "GE Vivid S70 Ultrasound Machine",
      category: "Imaging Devices",
      price: "$200", // Placeholder
      bidPrice: "$700",
      timeAndDate: "11 Oct 24, 11:10PM",
      useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
      userName: "Bashar",
    },
    {
      key: "3",
      sl: "01",
      productName: "GE Vivid S70 Ultrasound Machine",
      category: "Imaging Devices",
      price: "$200", // Placeholder
      bidPrice: "$600",
      timeAndDate: "11 Oct 24, 11:10PM",
      useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
      userName: "Bashar",
    },
    {
      key: "4",
      sl: "01",
      productName: "GE Vivid S70 Ultrasound Machine",
      category: "Imaging Devices",
      price: "$200", // Placeholder
      bidPrice: "$500",
      timeAndDate: "11 Oct 24, 11:10PM",
      useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
      userName: "Bashar",
    },
    {
      key: "5",
      sl: "01",
      productName: "GE Vivid S70 Ultrasound Machine",
      category: "Imaging Devices",
      price: "$200", // Placeholder
      bidPrice: "$400",
      timeAndDate: "11 Oct 24, 11:10PM",
      useImage: "https://i.ibb.co/0C5x0zk/Ellipse-1232.png",
      userName: "Bashar",
    },
  ];

  const showModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedProduct(null);
  };

  const columns = [
    {
      title: "#SL",
      dataIndex: "sl",
      key: "sl",
    },
    {
      title: "User Info",
      key: "userInfo",
      render: (_: unknown, record: Product) => (
        <div className="flex items-center space-x-2">
          <Image
            width={30}
            height={30}
            src={record.useImage} // Dynamic image URL from data
            alt="User Image"
            style={{ width: "30px", height: "30px", borderRadius: "50%" }}
          />
          <span>{record.userName}</span>
        </div>
      ),
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Bid Price",
      dataIndex: "bidPrice",
      key: "bidPrice",
    },
    {
      title: "Time & Date",
      dataIndex: "timeAndDate",
      key: "timeAndDate",
    },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: Product) => (
        <Space size="middle">
          <InfoCircleOutlined
            onClick={() => showModal(record)}
            style={{ fontSize: "18px", cursor: "pointer" }}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="w-full col-span-full md:col-span-6 rounded-lg">
      <h2 className="font-semibold py-3 text-[20px]">Bidder Lists</h2>
      <div className="bg-[#EEF9FE]">
        <ConfigProvider
          theme={{
            token: {
              colorBgContainer: "#EEF9FE",
              colorPrimary: "#1890ff",
            },
            components: {
              Table: {
                headerBg: "#48B1DB",
                headerColor: "#000000",
                headerBorderRadius: 2,
              },
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={{
              pageSize: 10, // You can adjust the page size
              position: ["bottomCenter"], // Option to position the pagination
            }}
            scroll={{ x: 1000 }}
          />
        </ConfigProvider>
      </div>

      {/* Modal */}
      <Modal
        open={isModalVisible}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <div className="text-black p-2">
          <h1 className="text-center text-xl font-semibold my-2 text-gray-500">
            Product Details
          </h1>
          <div className="p-5">
            <div className="flex justify-between py-3 border-t-2 border-gray-400">
              <p>Product Name :</p>
              <p>{selectedProduct?.productName || "N/A"}</p>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-400">
              <p>Category:</p>
              <p>{selectedProduct?.category || "N/A"}</p>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-400">
              <p>Price :</p>
              <p>{selectedProduct?.price || "N/A"}</p>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-400">
              <p>Bid Price:</p>
              <p>{selectedProduct?.bidPrice || "N/A"}</p>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-400">
              <p>Time & Date :</p>
              <p>{selectedProduct?.timeAndDate || "N/A"}</p>
            </div>
            <div className="flex justify-between py-3 border-t-2 border-gray-400">
              <p>User Name:</p>
              <p>{selectedProduct?.userName || "N/A"}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BidderLists;