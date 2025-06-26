"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Modal, Space, Table, ConfigProvider } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useGetAllEarningsQuery } from "@/redux/features/Earnings/Earnings";

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

const Earnings: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);
  const { data } = useGetAllEarningsQuery({});
  const [dataSource, setDataSource] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    if (data?.data?.attributes) {
      const mappedData = data.data.attributes.map((item: any, index: number) => ({
        key: item._id,
        sl: (index + 1).toString(),
        productName: item.product.title,
        category: item.product.description,
        price: `$${item.amount}`,
        bidPrice: `$${item.amount + 10}`,
        timeAndDate: new Date(item.createdAt).toLocaleString(),
        useImage: item.author?.imageUrl 
                  ? `${process.env.NEXT_PUBLIC_API_URL}/${item.author?.imageUrl}` 
                  : "/defaultImage.jpg", // Fallback image path
        userName: item.author?.name || "Anonymous",
      }));
      setDataSource(mappedData);
      setLoading(false);
    }
  }, [data]);

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
            src={record.useImage} // This should now have a valid URL or relative path
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
      <h2 className="font-semibold py-3 text-[20px]">Earnings</h2>
      <div className="bg-[#EEF9FE]">
        {loading ? (
          <div>Loading...</div>  // Show loading state
        ) : (
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
                pageSize: 10,
                position: ["bottomCenter"],
              }}
              scroll={{ x: 1000 }}
            />
          </ConfigProvider>
        )}
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

export default Earnings;
