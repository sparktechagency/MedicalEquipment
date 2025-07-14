import { baseApi } from "@/redux/api/baseApi";

const Earnings = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    balanceWidrowCreate: builder.mutation({
      query: (data) => ({
        url: "/payout/create",
        method: "POST",
        body: data,
      }),
    }),

    getAllEarnings: builder.query({
      query: () => ({
        url: "/payment/seller_earnings",
        method: "GET",
      }),
      providesTags: ["Earnings"],
    }),
    getPaymentHistory: builder.query({
      query: () => ({
        url: "/payout/self",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllEarningsQuery, useGetPaymentHistoryQuery, useBalanceWidrowCreateMutation } = Earnings;
