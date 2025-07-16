/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Table, Modal, Tag, Image, ConfigProvider } from "antd";
import { useGetPaymentHistoryQuery } from "@/redux/features/Earnings/Earnings";
import { FaEye } from "react-icons/fa"; // Importing the Eye icon from react-icons

const Page = () => {
  const { data, isLoading } = useGetPaymentHistoryQuery({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

 

  // Function to handle image view
  const handleViewImage = (imagePath: string, ) => {
    setSelectedImage(imagePath);
    console.log(imagePath);
    setIsModalVisible(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedImage(null);
    
  };

  // Function to format date
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  };

  // Function to get status color
  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'approve':
        return 'green';
      case 'pending':
        return 'orange';
      case 'reject':
        return 'red';
      default:
        return 'default';
    }
  };

  // Table columns configuration
  const columns = [
    {
      title: 'Serial No',
      dataIndex: 'serial',
      key: 'serial',
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Available Amount',
      dataIndex: 'availableAmount',
      key: 'availableAmount',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={getStatusColor(status)}>
          {status?.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Requested',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt: string) => formatDate(createdAt),
    },
    {
      title: 'Response',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (updatedAt: string) => formatDate(updatedAt),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        // console.log(record.image),
        <div className="flex space-x-2">
          <button
            onClick={() => handleViewImage(record.image)} // Handle image view on click
            className="text-blue-500 hover:underline flex items-center "
          >
          { record.status === 'approve' ?   <FaEye size={24} />  : ''}
          </button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 className="text-2xl font-bold mb-4">Payout History</h1>

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
          dataSource={data?.data || []}
          loading={isLoading}
          rowKey="_id"
          pagination={{
            pageSize: 10,
            position: ["bottomRight"],
          }}
          scroll={{ x: 800 }}
          bordered
        />
      </ConfigProvider>

      {/* Image Modal */}
      <Modal
        title={`Payment Screenshot `}
        open={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
        width={800}
        centered
      >
        
          <div style={{ textAlign: 'center' }}>
            <Image
              className="rounded-lg"
              width="100%"
              height="auto"
              src={selectedImage ? `${process.env.NEXT_PUBLIC_BASE_URL}/${selectedImage}` : "data not found"} // Corrected src URL
              alt="Payment Screenshot"
              
            />
          </div>
        
      </Modal>
    </div>
  );
};

export default Page;
