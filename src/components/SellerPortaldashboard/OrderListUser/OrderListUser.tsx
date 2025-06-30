'use client';

import React from 'react';
import { Table, ConfigProvider, Space, Button } from 'antd';
import { AiFillEye } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import { useGetOrdersAllQuery } from '@/redux/features/OrderListUser/OrderListUser';



interface OrderItem {
  _id: string;
  name: string;
  email: string;
  image: string;
  status: 'pending' | 'shipped' | 'cancelled';
  createdAt: string;
  product: {
    _id: string;
    title: string;
    price: number;
  };
}

interface TableData {
  key: string;
  sl: string;
  bidderName: string;
  email: string;
  userImage: string;
  productName: string;
  productId: string;
  bidPrice: string;
  bidTimeDate: string;
  status: 'pending' | 'shipped' | 'cancelled';
}

const OrderList: React.FC = () => {
  const { data } = useGetOrdersAllQuery({});

  const dataSource: TableData[] =
    data?.data?.attributes?.map((item: OrderItem, index: number) => ({
      key: item._id,
      sl: String(index + 1),
      bidderName: item.name,
      email: item.email,
      userImage: item.image,
      productName: item.product.title,
      productId: item.product._id,
      bidPrice: `$${item.product.price}`,
      bidTimeDate: moment(item.createdAt).format('DD MMM YYYY, hh:mm A'),
      status: item.status,
    })) || [];

  const columns = [
    {
      title: '#SL',
      dataIndex: 'sl',
      key: 'sl',
    },
    {
      title: 'Bidder Name',
      dataIndex: 'bidderName',
      key: 'bidderName',
      render: (_: string, record: TableData) => (
        <div className="flex items-center space-x-2">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-300">
            <Image
              src={
                record.userImage
                  ? `${process.env.NEXT_PUBLIC_BASE_URL}/${record.userImage}`
                  : ""
              }
              alt={record.bidderName}
              fill
              className="object-cover"
            />
          </div>
          <span className="font-medium">{record.bidderName}</span>
        </div>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Bid Price',
      dataIndex: 'bidPrice',
      key: 'bidPrice',
    },
    {
      title: 'Bid Time & Date',
      dataIndex: 'bidTimeDate',
      key: 'bidTimeDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: TableData['status']) => {
        const colorMap = {
          shipped: 'bg-green-500',
          pending: 'bg-orange-500',
          cancelled: 'bg-red-500',
        };

        return (
          <span
            className={`${colorMap[status]} text-white rounded-full px-2 py-1`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        );
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      render: ( record: TableData) => (
        <Space size="middle">
          <Link href={`OrderListUser/${record.productId}`}>
            <Button
              className="bg-[#48B1DB] text-white"
              icon={<AiFillEye size={20} />}
            />
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <div className="w-full rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-xl">Order List</h2>
      </div>

      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: '#EEF9FE',
            colorPrimary: '#1890ff',
          },
          components: {
            Table: {
              headerBg: '#48B1DB',
              headerColor: '#000000',
              headerBorderRadius: 2,
            },
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 1000 }}
        />
      </ConfigProvider>
    </div>
  );
};

export default OrderList;
