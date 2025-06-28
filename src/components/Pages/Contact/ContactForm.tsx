/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useContactCreateMutation } from "@/redux/features/Contact/Contact";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [contactCreate, { isLoading }] = useContactCreateMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();
    const data = { name, email, phone, message };
    try {
      const response = await contactCreate(data);
      if (response?.data?.code === 201) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "contact create successfull",
        });
        form.reset();
      } 
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to send message",
      });
    }
  };

  return (
    <div className="md:container p-5 md:flex md:space-x-10 justify-between items-center">
      {/* Left Side */}
      <div className="flex flex-col justify-between md:p-4 space-y-4 md:w-1/3">
        <div className="bg-[#EEF9FE] rounded-md py-3 text-center">
          <h2 className="text-2xl font-semibold mb-3">Office Address</h2>
          <p>Mst & Associate</p>
          <p>[Your Full Address Here]</p>
          <p>City, State, Zip Code</p>
        </div>

        <div className="bg-[#EEF9FE] rounded-md py-3 text-center">
          <h2 className="text-2xl font-semibold mb-3">Phone</h2>
          <p>+0883929830</p>
        </div>

        <div className="bg-[#EEF9FE] rounded-md py-3 text-center">
          <h2 className="text-2xl font-semibold mb-3">Email</h2>
          <p>info@mtsassociate.com</p>
          <p>support@mtsassociate.com</p>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-4 space-y-4 md:w-2/3 bg-[#EEF9FE] mt-2 md:mt-0 md:rounded-md"
      >
        <h2 className="text-3xl font-semibold text-center">Send Us a Message</h2>

        <div className="w-full md:flex md:space-x-4 py-3">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            className="mb-5 md:mb-0 w-full border-2 border-[#48B1DB] p-3 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="w-full border-2 border-[#48B1DB] p-3 rounded-md"
            required
          />
        </div>

        <input
          type="text"
          name="phone"
          placeholder="Enter phone"
          className="border-2 border-[#48B1DB] p-3 rounded-md"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          className="border-2 border-[#48B1DB] p-3 rounded-md"
          required
        ></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full md:w-[50%] md:mx-auto bg-[#48B1DB] text-white py-3 rounded-md hover:bg-blue-700"
        >
          {isLoading ? "Sending..." : "Send Us"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
