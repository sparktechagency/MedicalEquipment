import moment from "moment";
import Image from "next/image";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ProductCard = ({Order}: {Order: any}) => {
  console.log('how are you bro', Order?.product?.title);


 return (
 <div>
    {Order?.status === "shipped" ||  Order?.status === "progress" ? (
      <div className="w-full lg:flex border border-blue-300 rounded-lg overflow-hidden p-2 ">
      <div className="w-full lg:w-1/3 relative mb-4 md:mb-0">
        <Image
          className="w-full h-[240px] object-cover rounded-md"
          width={300}
          height={300}
          src={Order?.product?.images ? `${process.env.NEXT_PUBLIC_BASE_URL}/${Order?.product?.images[0]}` : ''}
          alt="Product Image"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-sm sm:text-xl md:text-xl">{Order?.product?.title}</h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">{Order?.product?.description}</p>
        </div>
        <div>
  
          <p className="font-semibold text-sm sm:text-lg md:text-lg">Price: ${Order?.product?.price}</p>
          <p className="font-semibold text-sm sm:text-lg md:text-lg mb-3">My Bid: ${Order?.bidAmount}</p>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-400">
            {/* Highest Other: ${highestOtherBid} */}
          </p>
          <p className="font-semibold text-sm sm:text-base md:text-lg text-gray-400">
              time: {Order?.createdAt
                ? moment(Order.createdAt).format('MMMM Do YYYY, h:mm')
                : '–'}
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400">
            <span className="font-semibold"></span> {Order?.product?.author?.address}
          </p>
        </div>
         <div className="flex justify-end -mt-16">
         <button className="bg-[#C9EDFB] text-black py-2 px-4 rounded ">{Order?.status}</button>
         </div>
        
      </div>
      </div>
    )  : 
    
    (<div>
      <div className="w-full lg:max-w-7xl mx-auto">
      <div className="flex justify-end -mb-8 mr-4"><button className="ml-auto text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 bg-[#EEF9FE] p-5 rounded">
          {/* Left Panel - Buyer Information */}
          <div className="">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                <Image
                  width={100}
                  height={100} 
                  src={Order?.author?.image ? `${process.env.NEXT_PUBLIC_BASE_URL}/${Order?.author?.image}` : ''} 
                  alt="Bashar Islam" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{Order?.author?.name}</h2>
            </div>
            

            <div className="space-y-0">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Name</span>
                <span className="text-gray-900">{Order?.author?.name}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Email</span>
                <span className="text-gray-900">{Order?.author?.email}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Phone Number</span>
                <span className="text-gray-900">{Order?.author?.phone}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Product Name</span>
                <span className="text-gray-900">{Order?.product?.title}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Bid Price</span>
                <span className="text-gray-900">${Order?.bidAmount}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Location</span>
                <span className="text-gray-900">{Order?.author?.address}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Bid Time & Date</span>
                <span className="text-gray-900">{Order?.createdAt
                ? moment(Order?.createdAt).format('MMMM Do YYYY, h:mm')
                : '–'}</span>
              </div>
              
             
            </div>
          </div>

          {/* Right Panel - Seller Information */}
          <div className="">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                <Image
                  width={100}
                  height={100} 
                  src={Order?.product?.author?.image ? `${process.env.NEXT_PUBLIC_BASE_URL}/${Order?.product?.author?.image}` : ''} 
                  alt="Hisham Islam" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{Order?.product?.author?.name}</h2>
            </div>

            <div className="space-y-0">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Seller Name</span>
                <span className="text-gray-900">{Order?.product?.author?.name}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Email</span>
                <span className="text-gray-900">{Order?.product?.author?.email}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Phone Number</span>
                <span className="text-gray-900">{Order?.product?.author?.phone}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Product Name</span>
                <span className="text-gray-900">{Order?.product?.title}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Product Price</span>
                <span className="text-gray-900">${Order?.product?.price}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Address</span>
                <span className="text-gray-900">{Order?.product?.author?.address}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Uploaded Date</span>
                <span className="text-gray-900"> {Order?.product?.date
                ? moment(Order?.product?.date).format('MMMM Do YYYY, h:mm')
                : '–'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
    }
 </div>
 );
};

export default ProductCard;
