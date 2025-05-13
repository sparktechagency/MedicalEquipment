import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 rounded-lg my-10">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image
              src="https://i.ibb.co/0C5x0zk/Ellipse-1232.png"
              alt="User Image"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Mr. Bashar Islam</h2>
            <p className="text-gray-500">User Order Details</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="space-y-4">
            <div className="flex justify-between border-b">
              <span className="text-gray-600">Name</span>
              <span className="text-gray-800">Bashar Islam</span>
            </div>
            <div className="flex justify-between border-b">
              <span className="text-gray-600">Email</span>
              <span className="text-gray-800">demomail@gmail.com</span>
            </div>
            <div className="flex justify-between border-b">
              <span className="text-gray-600">Phone Number</span>
              <span className="text-gray-800">028232949834</span>
            </div>
            <div className="flex justify-between border-b">
              <span className="text-gray-600">Product Name</span>
              <span className="text-gray-800">
                GE Vivid 570 Ultrasound Machine
              </span>
            </div>
            <div className="flex justify-between border-b">
              <span className="text-gray-600">Bid Price</span>
              <span className="text-gray-800">$800</span>
            </div>
            <div className="flex justify-between border-b">
              <span className="text-gray-600">Bid Time & Date</span>
              <span className="text-gray-800">11 Oct 24, 11:00 PM</span>
            </div>
            <div className="flex justify-between border-b">
              <span className="text-gray-600">Location</span>
              <span className="text-gray-800">New York, US</span>
            </div>
            <div className="flex justify-between border-b">
              <span className="text-gray-600">Order Number</span>
              <span className="text-gray-800">08</span>
            </div>
            <div className="flex justify-between border-b">
              <span className="text-gray-600">Delivery Method</span>
              <span className="text-gray-800">Standard Delivery</span>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button className=" py-2 px-4 bg-[#48B1DB] text-white rounded-md hover:bg-blue-700 transition">
            Delivery Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
