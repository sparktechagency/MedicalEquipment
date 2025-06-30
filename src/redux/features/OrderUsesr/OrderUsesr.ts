import { baseApi } from "@/redux/api/baseApi";

const OrderUsesr = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrderAll: builder.query({
      query: () => ({
        url: `/bid/my_order`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const {
  useGetOrderAllQuery
} = OrderUsesr;