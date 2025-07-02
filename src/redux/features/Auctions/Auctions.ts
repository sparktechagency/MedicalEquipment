import { baseApi } from "@/redux/api/baseApi";

const Auctions = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: ({ categoryId, title, sortPriceOrder }) => ({
        url: `/product/all?category=${categoryId}&title=${title}&sortprice=${sortPriceOrder}`,
        method: "GET",
      }),
    }),
    getProductSingles: builder.query({
      query: (id) => ({
        url: `/product/single/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const { useFetchProductsQuery, useGetProductSinglesQuery } = Auctions;
