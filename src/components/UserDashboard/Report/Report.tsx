"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Suspense } from 'react';
import { useReportCreateMutation } from "@/redux/features/Report/Report";
import Swal from "sweetalert2";
import { useSearchParams } from "next/navigation";

const Report = () => {
  // Suspense boundary around this part ensures proper handling of client-side fetching
  const SearchParamsWrapper = () => {
    const id = useSearchParams().get('id');
    console.log(id);

    const [reportCreate, { isLoading }] = useReportCreateMutation();

    const handleReportCreate = async (e: any) => {
      e.preventDefault();
      const form = e.target;
      const title = form.title.value;
      const description = form.description.value;

      const data = { title, description };
      try {
        const response = await reportCreate({ id, data }).unwrap();
        console.log(response);
        if (response?.code === 201) {
          Swal.fire({
            icon: "success",
            title: "Report Submitted",
            text: response.data.message || "Your report was created successfully.",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <form onSubmit={handleReportCreate}>
        <div className="flex flex-col p-4 space-y-4 w-full bg-[#EEF9FE] mt-2 rounded-md">
          <input
            type="text"
            name="title"
            placeholder="Subject"
            className="border-2 border-[#48B1DB] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48B1DB]"
          />

          <textarea
            name="description"
            placeholder="Message"
            rows={5}
            className="border-2 border-[#48B1DB] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#48B1DB]"
          />

          <div className="flex justify-between flex-col md:flex-row gap-4 mt-5">
            <button
              type="button"
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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsWrapper />
    </Suspense>
  );
};

export default Report;

