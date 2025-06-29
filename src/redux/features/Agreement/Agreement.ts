import { baseApi } from "@/redux/api/baseApi";




const Agreement = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAbouts: builder.query({
      query: () => ({
        url: "/setting/about_us",
        method: "GET",
      }),
      providesTags:["settings"],
    }),
    getUserAgreement: builder.query({
      query: () => ({
        url: "/setting/user_agreement",
        method: "GET",
      }),
      providesTags:["settings"],
    }),
     getSellerAgreement: builder.query({
      query: () => ({
        url: "/setting/seller_agreement",
        method: "GET",
      }),
      providesTags:["settings"],
    }),
    getTermCondition: builder.query({
      query: () => ({
        url: "/setting/terms",
        method: "GET",
      }),
      providesTags:["settings"],
    }),
    getPrivacyPolicy: builder.query({
      query: () => ({
        url: "/setting/privacy",
        method: "GET",
      }),
      providesTags:["settings"],
    }),

  }),
});

export const {
  useGetAboutsQuery,
  useGetPrivacyPolicyQuery,
  useGetSellerAgreementQuery,
  useGetTermConditionQuery,
  useGetUserAgreementQuery,
} = Agreement;