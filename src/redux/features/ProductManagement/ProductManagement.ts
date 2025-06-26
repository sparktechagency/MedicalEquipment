import { baseApi } from "@/redux/api/baseApi";


const ProductManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: `/product`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    getProductAll: builder.query({
      query: () => ({
        url: `/product/self`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getCategoryAll: builder.query({
      query: () => ({
        url: `/category`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getBitAll: builder.query({
      query: (id) => ({
        url: `/bid/product/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getProductSingle: builder.query({
      query: (id) => ({
        url: `/product/single/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    UpdateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/product/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { 
  useGetProductSingleQuery,
  useGetProductAllQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useCreateProductMutation,
  useGetBitAllQuery,
  useGetCategoryAllQuery
} = ProductManagementApi;