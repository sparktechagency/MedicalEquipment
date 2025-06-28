"use client";

import { useState } from "react";
import { useReportCreateMutation } from "@/redux/features/Report/Report";
import Swal from "sweetalert2";

const Report = () => {
  const [reportCreate, { isLoading }] = useReportCreateMutation();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleReportCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await reportCreate({ title, description });

      if ("data" in response && response.data) {
        Swal.fire({
          icon: "success",
          title: "Report Submitted",
          text: response.data.message || "Your report was created successfully.",
        });

        // Reset fields
        setTitle("");
        setDescription("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to submit report.",
      });
    }
  };

  return (
    <form onSubmit={handleReportCreate}>
      <div className="flex flex-col p-4 space-y-4 w-full bg-[#EEF9FE] mt-2 rounded-md">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Subject"
          className="border-2 border-[#48B1DB] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48B1DB]"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Message"
          rows={5}
          className="border-2 border-[#48B1DB] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48B1DB]"
        />

        <div className="flex justify-between flex-col md:flex-row gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              setTitle("");
              setDescription("");
            }}
            className="w-full md:w-[45%] px-7 py-3 text-[#48B1DB] rounded-md border-2 border-[#48B1DB] focus:outline-none focus:ring-2 focus:ring-[#48B1DB]"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-[45%] px-7 py-3 bg-[#48B1DB] text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#48B1DB]"
          >
            {isLoading ? "Submitting..." : "Report"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Report;
