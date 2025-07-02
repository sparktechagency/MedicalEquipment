/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { MdReport } from 'react-icons/md';
import { usePaymentCreateMutation } from '@/redux/features/payment/payment';
const  ProductCard =({ products }: { products: any }) =>{
  console.log(products._id);
  const { title, description, price, images, } = products?.product;

  const { address,} = products?.product?.author;
  const bidTime = products?.createdAt;
  const productIsWinner = products?.isWinner ;
  const paymentStatus   = products?.paymentStatus;

  const [Payment] = usePaymentCreateMutation();
  const handlePaymentProduct = async(id:any) => {
    try {
     const res = await Payment(id).unwrap();
     console.log(res);
     if(res?.code === 200){
       window.location.href = res?.data?.attributes?.redirect
     }
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className="w-full lg:w-[90%] lg:flex border border-blue-300 rounded-lg overflow-hidden mb-4 p-2">
      <div className="w-full lg:w-1/3 relative">
        <Image
          width={300}
          height={300}
          src={images ? `${process.env.NEXT_PUBLIC_BASE_URL}/${images[0]}` : ''}
          className="w-full h-[240px] object-cover rounded-md"
          alt="Product Image"
        />
      </div>
      <div className="md:p-4 flex-1 relative">
        <div className='md:flex space-y-3 md:space-y-0 justify-between'>
         <h3 className="font-bold llg:text-lg">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="mt-4">
        price <span className="text-xl font-semibold"> ${price}</span>
        </div>
        <div className="mt-0 mt:mt-2 text-gray-800">
          My Bid Amount: <span className="font-semibold">${products?.bidAmount}</span>
        </div>
        <div className="text-gray-400">
          {/* Previous Bid Amount: <span>${previousBidAmount}</span> */}
        </div><br />
        <div className="mt-0 mb-2 text-gray-600 ">
          Bid Time: <span className="font-semibold">{moment(bidTime).format('MMMM Do YYYY, h:mm')}</span>
        </div>
        <div className="text-gray-600">{address}</div>

        
        {productIsWinner === true && paymentStatus === 'unpaid' && (
          <button onClick={() => handlePaymentProduct(products?._id)} className="md:absolute md:bottom-4 md:right-4 mt-1 bg-[#48B1DB] text-white px-4 py-2 rounded-md">
            Pay Now
          </button>
        )}

        {productIsWinner === true ? (
          <div>
            {
            paymentStatus === 'paid' && (
              <button disabled className="md:absolute md:bottom-4 md:right-4 mt-1 bg-[#48b1db8e] text-white px-4 py-2 rounded-md">
                Comeplete
              </button>
            )
          }
          </div>
        ) : ""
         }

      {productIsWinner === true && paymentStatus === 'paid' && (
          <Link href={`/Report?id=${products?._id}`} className="md:absolute md:top-4 md:right-4 text-red-400   rounded-md">
            <MdReport size={40} />
          </Link>
        )}

      </div>
    </div>
  );
}

export default ProductCard