"use client";
import { useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import { Modal, Input, Button } from "antd";
import Swal from "sweetalert2";
import { useParams } from "next/navigation";
import { useCreateBitMutation, useGetProductSinglesQuery } from "@/redux/features/Auctions/Auctions";
import moment from "moment";

const ProductPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState("");
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); 


  const {id} = useParams();
  console.log(id);
  const {data} = useGetProductSinglesQuery(id)
  const AllData = data?.data?.attributes;
  console.log(AllData)


  const [bitCreate] = useCreateBitMutation();
  const handleBidSubmit = async () => {
    const data = {
      amount:bidAmount,
      product:id
    }
    try {
      const res = await bitCreate(data).unwrap();
      console.log(res);
      if(res?.code === 200){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bid submitted successfully",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.log(error);
    }
  }


  // Set the page to render client-side only
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to open the bid modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the bid modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle bid amount change
  const handleBidChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBidAmount(e.target.value);
  };

  // Handle submit bid
  const handleSubmitBid = () => {
    setIsReviewModalOpen(true); // Open the review modal
    closeModal(); // Close the original bid modal
  };

  // Ensure this component is only rendered on the client
  if (!isClient) {
    return null; // You can also show a loading spinner here while waiting for the client-side render
  }

  

  return (
    <div className="md:container mx-auto px-4 py-6">
      <div className="md:flex items-center justify-between space-x-0 md:space-x-4">
        {/* Left Side - Thumbnails and Main Image */}
        <div className="w-full md:w-[60%] flex flex-col md:flex-row items-center space-x-0 md:space-x-4 mb-6 md:mb-0">
          {/* Left Thumbnail Images */}
          <div className="w-full md:w-[30%] mb-4 md:mb-0">
            <Image 
              
              src={AllData?.images ? `${process.env.NEXT_PUBLIC_BASE_URL}/${AllData?.images[0]}`
              : '/placeholder.png'
          }
              alt="Thumbnail Image 1"
              width={250}
              height={190}
              className="w-full h-[190px] rounded-lg  cursor-pointer py-2"
            />
            <Image 
              
              src={AllData?.images ? `${process.env.NEXT_PUBLIC_BASE_URL}/${AllData?.images[1]}`
              : '/placeholder.png'
          }
              alt="Thumbnail Image 2"
              width={250}
              height={190}
              className="w-full h-[190px] rounded-lg  cursor-pointer transition-transform duration-300 py-2"
            />
            <Image 
              
              src={AllData?.images ? `${process.env.NEXT_PUBLIC_BASE_URL}/${AllData?.images[2]}`
              : '/placeholder.png'
          }
              alt="Thumbnail Image 3"
              width={250}
              height={190}
              className="w-full h-[190px]  md:h-[190px] rounded -lg cursor-pointer transition-transform duration-300 py-2"
            />
          </div>

          {/* Main Image */}
          <div className="md:w-[70%px] md:h-full w-full">
            <Image
              src={AllData?.images ? `${process.env.NEXT_PUBLIC_BASE_URL}/${AllData?.images[3]}`
              : '/placeholder.png'
          }
              alt="Main Product Image"
              width={661}
              height={550}
              className="rounded-lg w-full h-[190px] md:h-[555px] object-cover"
            />
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="w-full md:w-[38%]">
          <div className="mb-4 md:mb-4 lg:mb-20">
            <h2 className="text-[16px] md:text-[20px] lg:text-[38px] font-semibold text-gray-900">
              {AllData?.title}
            </h2>
            <br />
            <p className="text-lg text-gray-600">
              {AllData?.description}
            </p>
          </div>

          <div className="mb-4">
            <h1 className="text-2xl font-bold ">Price: <span className="text-[#48B1DB]">{AllData?.price}</span></h1>
          </div>

          <div className="mb-4">
            <h1 className="text-red-600">{moment(AllData?.date).format('dddd, MMMM Do YYYY, HH:mm')}</h1>
            <br />
            <h1>{AllData?.author?.address}</h1>
          </div>
          <br />
          <div className="mt-4">
            <button
              className="w-full border border-[#48B1DB] font-semibold text-[#48B1DB] py-2 px-4 rounded-lg transition duration-300"
              onClick={openModal}
            >
              Place a Bid
            </button>
          </div>
        </div>
      </div>

      {/* Ant Design Modal for placing bid */}
      <Modal
        title="Place a Bid"
        visible={isModalOpen}
        onCancel={closeModal}
        footer={null}
        centered
      >
        <div>
          <h1 className="font-semibold py-3">Current bid $200</h1>
          <div className="flex justify-between items-center space-x-3">
            <div>
              <label htmlFor="number">Enter your bid</label>
              <Input
                type="number"
                id="number"
                value={bidAmount}
                onChange={handleBidChange}
                placeholder="Enter your bid amount"
                size="large"
                prefix="$"
                className="mb-4"
              />
            </div>
            <Button
              size="large"
              onClick={handleSubmitBid}
              className="w-1/3 mb-0 bg-[#48B1DB] text-white "
              type="primary"
            >
              Review bid
            </Button>
          </div>
          <h1>Enter &200.5 or more</h1>
        </div>
      </Modal>

      {/* Ant Design Modal for review bid */}
      <Modal
        title="Review Your Bid"
        visible={isReviewModalOpen}
        onCancel={() => setIsReviewModalOpen(false)}
        footer={null}
        centered
      >
        <div>
          <h1 className="py-3 font-extrabold text-[20px]">Review bid</h1>
          <h2 className="font-semibold py-3">Current bid : ${AllData?.price}</h2>
          <h1 className="font-semibold py-3">Your max bid : ${bidAmount}</h1>
          <p className="py-2">Are you sure you want to place this bid?</p>
          <div className="flex space-x-4">
            <Button
              onClick={() => {
                setIsReviewModalOpen(false);
                openModal();
              }} // Close the review modal
              className="w-1/3"
              type="default"
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                handleBidSubmit();
                setIsReviewModalOpen(false); // Close the review modal after submission
              }}
              className="w-1/3 bg-[#48B1DB] text-white"
              type="primary"
            >
              Confirm Bid
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductPage;
