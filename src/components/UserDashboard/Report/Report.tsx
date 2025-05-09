const Report = () => {
  return (
    <div>
      {/* Right Side - Message Form */}
      <div className="flex flex-col p-4 space-y-4 w-full bg-[#EEF9FE] mt-2 md:mt-0 md:rounded-md">
        <input
          type="text"
          placeholder="Subject"
          className="border-2 border-[#48B1DB] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48B1DB]"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="border-2 border-[#48B1DB] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48B1DB]"
        ></textarea>

        <div className="flex justify-between space-x-5 md:space-x-10 mx-auto mt-5">
          <button className="px-10 md:mx-auto  text-[#48B1DB] py-3 rounded-md border-2 border-[#48B1DB] focus:outline-none focus:ring-2 focus:ring-[#48B1DB]">
            Cancel
          </button>
          <button className="px-10 md:mx-auto bg-[#48B1DB] text-white py-3 rounded-md  focus:outline-none focus:ring-2 focus:ring-[#48B1DB]">
            Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default Report;
