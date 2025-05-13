"use client";
import PaginationComponent from "@/components/UI/PaginationComponent";
import { useState } from "react";


const ListOffAllProducts =() => {
  // Full list of products (20 items as per the image)
  const allProducts = Array(20).fill({
    name: "GE Vivid S70 Ultrasound Machine",
    image: "https://i.ibb.co/bjzn3zKW/Rectangle-3.png", // Corrected key name
    price: 200,
    status: "APPROVE",
  }).map((product, index) => ({
    ...product,
    status: index < 2 ? "PENDING" : "APPROVE", // First two are PENDING, rest are APPROVE
  }));

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // 8 items per page as shown in the image
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  // Calculate the products to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page:any) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h1 className="text-lg font-semibold text-gray-800">
            List of all products ({allProducts.length})
          </h1>
        </div>
        <div>
          {currentProducts.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 border-b"
            >
              <div className="flex items-center space-x-4">
                {/* Replace FaStethoscope with the image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-6 w-6 object-cover"
                />
                <div>
                  <p className="text-gray-800 font-medium">{product.name}</p>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    product.status === "PENDING"
                      ? "bg-gray-200 text-gray-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {product.status}
                </span>
                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Edit
                </button>
                <button className="p-2 hover:bg-gray-200 rounded">
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
            </div>
          ))}
        </div>
        <div className="flex justify-center p-4">
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ListOffAllProducts