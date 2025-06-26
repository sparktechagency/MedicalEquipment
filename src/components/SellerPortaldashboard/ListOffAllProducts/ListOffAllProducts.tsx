/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useDeleteProductMutation, useGetProductAllQuery } from "@/redux/features/ProductManagement/ProductManagement";
import { message, Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";

interface Product {
  _id: string;
  id: string;
  title: string;
  images: string[];
  price: number;
  status: string;
  name?: string;
  image?: string;
}

const ListOfAllProducts = () => {
  const { data, isLoading, refetch } = useGetProductAllQuery({});
  console.log(data);
  const [deleteProduct] = useDeleteProductMutation();

  // Transform API data with correct typing
  const allProducts: Product[] =
    data?.data?.attributes?.map((product:any) => ({
      ...product,
      id: product._id,
      name: product.title,
      image: product.images?.[0], // Fallback if the first image exists
      status: product.status || "Unknown", // Ensure status is always defined
    })) || [];

  const handleDeleteProduct = async (id: string) => {
    try {
      const res = await deleteProduct(id).unwrap();
      if (res.code === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product deleted successfully",
          showConfirmButton: false,
          timer: 1500
        });
        refetch(); // Refresh the product list after deletion
      }
    } catch (error) {
      console.error("Failed to delete product:", error);
      message.error("Failed to delete product.");
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <h1 className="text-[20px] font-semibold text-gray-800 mb-4">
        List of all products ({allProducts.length})
      </h1>

      <div>
        {currentProducts.map((product) => (
          <Link href={`/ListOffAllProduct/BidderList/${product.id}`}
            key={product.id}
            className="flex items-center justify-between border-[#91C5DF] bg-gray-50 border my-5 rounded-md p-1"
          >
            <div className="flex items-center space-x-4">
              <Image
                width={500}
                height={500}
                src={product.image ? `${process.env.NEXT_PUBLIC_BASE_URL}/${product.image}` : "/default-image.jpg"} // Fallback if no image exists
                alt="Product Image"
                className="h-16 w-16 object-cover"
              />
              <div>
                <p className="text-gray-800 font-medium">{product.name}</p>
                <div className="flex space-x-5 items-center">
                  <p className="text-gray-600">${product.price}</p>
                  <p
                    className={`px-3 py-1 rounded-full text-sm ${
                      product.status === "PENDING"
                        ? "bg-gray-200 text-gray-700"
                        : product.status === "approve"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {product.status}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Link href={`/ListOffAllProduct/${product.id}`}>
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Edit
                </button>
              </Link>
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevents navigating via Link
                  handleDeleteProduct(product.id);
                }}
                className="p-2 hover:bg-gray-200 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Pagination
          current={currentPage}
          total={allProducts.length}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default ListOfAllProducts;