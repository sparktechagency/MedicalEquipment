import Image from 'next/image'

const ProductPage = () => {
  return (
    <div className="md:container mx-auto px-4 py-6">
      <div className="md:flex items-center justify-between">
        {/* Left Side - Thumbnails and Main Image */}
        <div className="w-full md:w-[60%]  flex flex-col md:flex-row items-center space-x-0 md:space-x-4">
          {/* Left Thumbnail Images */}
          <div className="">
            <Image
              src="https://i.ibb.co/bjzn3zKW/Rectangle-3.png"
              alt="Thumbnail Image 1"
              width={250}
              height={190}
              className="rounded-lg cursor-pointer    py-2"
            />
            <Image
              src="https://i.ibb.co/bjzn3zKW/Rectangle-3.png"
              alt="Thumbnail Image 2"
              width={250}
              height={190}
              className="rounded-lg cursor-pointer transition-transform duration-300   py-2"
            />
            <Image
              src="https://i.ibb.co/bjzn3zKW/Rectangle-3.png"
              alt="Thumbnail Image 3"
              width={250}
              height={190}
              className="rounded-lg cursor-pointer transition-transform duration-300   py-2"
            />
          </div>

          {/* Main Image */}
          <div className="md:w-[661px] md:h-full w-full">
            <Image
              src="https://i.ibb.co/bjzn3zKW/Rectangle-3.png"
              alt="Main Product Image"
              width={661}
              height={550}
              className="rounded-lg w-full h-full  md:h-[555px]   "
            />
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="w-full md:w-[40%]">
          <div className='mb-20'>
          <h2 className="text-[40px] font-semibold text-gray-900">GE Vivid S70 Ultrasound Machine</h2>
          <p className="text-lg text-gray-600 ">
            Advanced cardiovascular ultrasound system with crystal-clear imaging and intuitive workflow. Combines high performance with portability for efficient diagnostics anytime, anywhere.
          </p>
          </div>

          <div className="">
            <h1 className="text-2xl font-bold text-blue-600">$200</h1>
            <br />
            <h1 className="text-sm text-gray-500">2 Bids</h1>
          </div>

          <div className="">
            <h1 className="text-red-600">2 days 4 hours 5 minutes</h1>
            <br />
            <h1> New York, US</h1>
          </div>

          <div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
              Place a Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage

