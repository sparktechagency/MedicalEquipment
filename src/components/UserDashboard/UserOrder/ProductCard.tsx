import Image from "next/image";

interface Product {
  id: number;
  status: "Pending" | "Progress" | "Complete";
  title: string;
  description: string;
  price: number;
  yourBid: number;
  highestOtherBid: number;
  bidTime: string;
  imgUrl: string;
}

const ProductCard: React.FC<Product> = ({
  title,
  description,
  price,
  yourBid,
  highestOtherBid,
  bidTime,
  imgUrl,
}) => (
  <div className="w-full lg:flex border border-blue-300 rounded-lg overflow-hidden p-2 ">
    <div className="w-full lg:w-1/3 relative mb-4 md:mb-0">
      <Image
        className="w-full h-full object-cover"
        width={300}
        height={300}
        src={imgUrl}
        alt={title}
      />
    </div>
    <div className="flex-1 p-4 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-sm sm:text-xl md:text-2xl">{title}</h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">{description}</p>
      </div>
      <div>
        <p className="font-semibold text-sm sm:text-xl md:text-2xl">${price}</p>
        <p className="font-semibold text-sm sm:text-xl md:text-2xl">My Bid: ${yourBid}</p>
        <p className="text-sm sm:text-base md:text-lg text-gray-400">
          Highest Other: ${highestOtherBid}
        </p>
        <p className="font-semibold text-sm sm:text-base md:text-lg text-gray-400">{bidTime}</p>
      </div>
      <div className="flex items-center justify-end mt-4">
        <button className="bg-green-500 text-white px-2 md:px-4 py-2 rounded hover:bg-green-600 text-sm sm:text-base">
          Accept Order
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
