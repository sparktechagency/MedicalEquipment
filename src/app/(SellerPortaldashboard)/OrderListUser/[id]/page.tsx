'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import moment from 'moment';
import { message } from 'antd';
import Image from 'next/image';
import { useDeliveryNowMutation, useDeliveryProductMutation, useGetOrdersSingleQuery } from '@/redux/features/OrderListUser/OrderListUser';
import Swal from 'sweetalert2';

const OrdersDetails: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const { data } = useGetOrdersSingleQuery(id);
  const order = data?.data?.attributes;

  const bidId = order?.bid?._id;
  const bid = order?.bid || {};
  const product = order?.product || {};
  const author = bid?.author || {};

  const [sendingProduct] = useDeliveryProductMutation({});
  const [deliveryNow] = useDeliveryNowMutation({});

  const formatCurrency = (amount: number): string => `$${amount}`;

  const handleSendingProduct = async (bidId: string) => {
    try {
      const res = await sendingProduct(bidId);
      
      if (res.data?.code === 200) {
         Swal.fire({
                  icon: "success",
                  title: "Success",
                  text: "Product sending success",
                });
      }
    } catch (error) {
      console.error(error);
      message.error('Something went wrong while sending the product');
    }
  };

  const handleDeliveryNow = async (bidId: string) => {
    try {
      const res = await deliveryNow(bidId);
      if ( res.data?.code === 200) {
         Swal.fire({
                  icon: "success",
                  title: "Success",
                  text: "Delivery Success",
                });
      }
    } catch (error) {
      console.error(error);
      message.error('Something went wrong while processing delivery');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 mt-5 rounded-md">
      <div className="max-w-2xl mx-auto bg-white rounded-lg">
        {/* Header */}
        <div className="flex items-center gap-3 p-6">
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={() => router.back()}
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-medium text-gray-900">User Order Details</h1>
        </div>

        {/* User Profile Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 bg-teal-600 rounded-full overflow-hidden">
              <Image
                src={
                  author?.image
                    ? `${author.image}`
                    : ""
                }
                alt={author?.name || 'User'}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                {author?.name || 'Unknown User'}
              </h2>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="p-6 space-y-0">
          {[
            { label: 'Bid Amount', value: formatCurrency(bid?.bidAmount || 0) },
            { label: 'Product Name', value: product?.title || 'N/A' },
            { label: 'Product Description', value: product?.description || 'N/A' },
            { label: 'Product Price', value: formatCurrency(product?.price || 0) },
            {
              label: 'Bid Time & Date',
              value: bid?.createdAt
                ? moment(bid.createdAt).format('YYYY-MM-DD')
                : 'N/A',
            },
            { label: 'Status', value: order?.bid?.status || 'N/A' },
            { label: 'Payment Status', value: bid?.paymentStatus || 'N/A' },
            { label: 'Location', value: author?.address || 'N/A' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center py-4 border-b border-gray-100"
            >
              <span className="text-gray-600 font-medium">{item.label}</span>
              <span className="text-gray-900 font-semibold">{item.value}</span>
            </div>
          ))}

          {/* Status Action Button */}
          <div className="pt-6 flex justify-end space-x-4">
            {order?.bid?.status === 'progress' && bidId && (
              <button
                onClick={() => handleSendingProduct(bidId)}
                className="px-6 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-medium"
              >
                Sending Product
              </button>
            )}
            {order?.bid?.status === 'shipped' && bidId && (
              <button
                onClick={() => handleDeliveryNow(bidId)}
                className="px-6 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-medium"
              >
                Delivery Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDetails;

