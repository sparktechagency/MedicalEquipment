// components/ContactForm.js
const ContactForm = () => {
  return (
    <div className="md:container p-5 md:flex md:space-x-10 justify-between items-center">
      {/* Left Side - Contact Information */}
      <div className="flex flex-col justify-between md:p-4 space-y-4 md:w-1/3">
        <div className="bg-[#EEF9FE] rounded-md py-3 text-center">
          <h2 className="text-2xl font-semibold mb-3">Office Address</h2>
          <p className="">Mst & Associate</p>
          <p className="">[Your Full Address Here]</p>
          <p className="">City, State, Zip Code</p>
        </div>

        <div className="bg-[#EEF9FE] rounded-md py-3 text-center">
          <h2 className="text-2xl font-semibold mb-3">Phone</h2>
          <p className="">+0883929830</p>
        </div>

        <div className="bg-[#EEF9FE] rounded-md py-3 text-center">
          <h2 className="text-2xl font-semibold mb-3">Email</h2>
          <p className="">info@mtsassociate.com</p>
          <p className="">support@mtsassociate.com</p>
        </div>
      </div>

      {/* Right Side - Message Form */}
      <div className="flex flex-col p-4 space-y-4 md:w-2/3 bg-[#EEF9FE] mt-2 md:mt-0 md:rounded-md">
        <h2 className="text-3xl font-semibold  text-center">
          Send Us a Message
        </h2>

        <div className="w-full md:flex md:space-x-4 py-3  rounded-md">
          <input
            type="text"
            placeholder="Enter name"
            className="mb-5 md:mb-0 w-full border-2 border-[#48B1DB] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48B1DB]"
          />
          <input
            type="email"
            placeholder="Enter email"
            className="w-full border-2 border-[#48B1DB] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48B1DB]"
          />
        </div>
        <input
          type="text"
          placeholder="Enter phone"
          className="border-2 border-[#48B1DB] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48B1DB]"
        />
        <textarea
          placeholder="Message"
          className="border-2 border-[#48B1DB] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48B1DB]"
        ></textarea>

        <button className="w-full md:w-[50%] md:mx-auto bg-[#48B1DB] text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#48B1DB]">
          Send Us
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
