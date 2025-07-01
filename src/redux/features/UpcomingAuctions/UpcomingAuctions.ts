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
  }),
});

export const {
  useGetProductAllQuery
} = UpcomingAuctions;