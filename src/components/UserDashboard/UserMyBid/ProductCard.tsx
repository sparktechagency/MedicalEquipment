import Image from 'next/image';

interface Product {
  title: string;
  description: string;
  price: number;
  myBidAmount: number;
  previousBidAmount: number;
  bidTime: string | number | Date;
  location: string;
  imageUrl: string;
}

const  ProductCard =({ product }: { product: Product }) =>{
  const { title, description, price, myBidAmount, previousBidAmount, bidTime, location, imageUrl } = product;
  return (
    <div className="w-full lg:w-[90%] lg:flex border border-blue-300 rounded-lg overflow-hidden mb-4 p-2">
      <div className="w-full lg:w-1/3 relative">
        <Image
          className="w-full h-full "
          width={300}
          height={300}
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="p-4 flex-1 relative">
        <div className='md:flex space-y-3 md:space-y-0 justify-between'>
         <h3 className="font-bold llg:text-lg">{title}</h3>
           <h1 className="text-[#48B1DB] ">Contact : 0197******</h1>
        </div>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="mt-4">
          <span className="text-xl font-semibold">${price}</span>
        </div>
        <div className="mt-2 text-gray-800">
          My Bid Amount: <span className="font-semibold">${myBidAmount}</span>
        </div>
        <div className="text-gray-400">
          Previous Bid Amount: <span>${previousBidAmount}</span>
        </div>
        <div className="mt-2 text-gray-600">
          Bid Time: {new Date(bidTime).toLocaleString()}
        </div>
        <div className="text-gray-600">{location}</div>
        <button className="absolute bottom-4 right-4 bg-[#48B1DB] text-white px-4 py-2 rounded-md">
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard