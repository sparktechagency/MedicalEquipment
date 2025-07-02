import { baseApi } from "@/redux/api/baseApi";
const UpcomingAuctions = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductAll: builder.query({
      query: () => ({
        url: `/product/request`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getTopPickedAll: builder.query({
      query: () => ({
        url: `/product/top_picked`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductAllQuery,
  useGetTopPickedAllQuery,
} = UpcomingAuctions;