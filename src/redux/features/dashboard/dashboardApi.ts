import { baseApi } from "@/redux/api/baseApi";

const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStatus: builder.query({
      query: () => ({
        url: "/dashboard/seller/statistics",
        method: "GET",
      }),
      transformResponse: (response) => response?.data,
    }),
    getTransactionRatio: builder.query({
      query: () => ({
        url: "/dashboard/seller/recent_sell",
        method: "GET",
      }),
      transformResponse: (response) => response?.data,
    }),
    getIncomeRatio: builder.query({
      query: () => ({
        url: "/dashboard/admin/transaction_ratio",
        method: "GET",
      }),
      transformResponse: (response) => response?.data,
    }),
  }),
});

export const { 
  useGetDashboardStatusQuery,
  useGetTransactionRatioQuery,
  useGetIncomeRatioQuery,
 } = dashboardApi;
