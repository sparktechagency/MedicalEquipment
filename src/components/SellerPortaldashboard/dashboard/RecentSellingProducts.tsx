import { useState,  } from "react";
import { Modal, Space, Table, ConfigProvider } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useGetTransactionRatioQuery } from "@/redux/features/dashboard/dashboardApi";

// Define the type for the product data
interface Product {
  key: string;
  sl: string;
  productName: string;
  category: string;
  price: string;
  timeAndDate: string;
}

// Define the type for the selected product in the modal
interface SelectedProduct {
  productName?: string;
  category?: string;
  price?: string;
  timeAndDate?: string;
}

const RecentSellingProducts: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);

  const { data } = useGetTransactionRatioQuery({});
  interface ProductAttribute {
    _id: string;
    title: string;
    category: {
      name: string;
    };
    price: number;
    date: string;
  }

  interface TransactionRatioData {
    attributes: ProductAttribute[];
  }

  const dataSource: Product[] = (data as TransactionRatioData | undefined)?.attributes.map((item: ProductAttribute, index: number) => ({
    key: item._id,
    sl: (index + 1).toString(),
    productName: item.title,
    category: item.category.name,
    price: item.price.toString(),
    timeAndDate: new Date(item.date).toLocaleDateString(),
  })) || [];

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
      <h2 className="font-semibold py-3 text-[20px]">Recent Selling Products</h2>
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
          pagination={false}
          scroll={{ x: 800 }}
        />
      </ConfigProvider>

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
              <p>Time & Date :</p>
              <p>{selectedProduct?.timeAndDate || "N/A"}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RecentSellingProducts;
