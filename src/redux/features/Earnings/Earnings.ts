import { baseApi } from "@/redux/api/baseApi";

const Earnings = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllEarnings: builder.query({
      query: () => ({
        url: "/payment/seller_earnings",
        method: "GET",
      }),
      providesTags: ["Earnings"],
    }),
    updateEarnings: builder.mutation({
      query: (data) => ({
        url: "/info/all-reports",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Earnings"],
    }),

    getSingleEarnings: builder.query({
      query: (id) => ({
        url: `/payment/transaction/${id}`,
        method: "GET",
      }),
    }),

    deleteReport: builder.mutation({
      query: (id) => ({
        url: `/report/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Earnings"],
    }),
  }),
});

export const { useGetAllEarningsQuery } = Earnings;
