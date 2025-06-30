import { baseApi } from "@/redux/api/baseApi";
const UserBid = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBidAll: builder.query({
      query: () => ({
        url: `/bid/self`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getOrdersSingle: builder.query({
      query: (id) => ({
        url: `/bid/order/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    deliveryProduct: builder.mutation({
      query: (id) => ({
        url: `/bid/shipped/${id}`,
        method: "POST",
      }),
    }),
    DeliveryNow: builder.mutation({
      query: (id) => ({
        url: `/bid/delivery/${id}`,
        method: "POST",
      }),
    }),
    UpdateOrders: builder.mutation({
      query: ({ id, data }) => ({
        url: `/product/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetBidAllQuery,
} = UserBid;