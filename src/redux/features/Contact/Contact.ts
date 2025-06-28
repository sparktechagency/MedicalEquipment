import { baseApi } from "@/redux/api/baseApi";



const Contact = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    ContactCreate: builder.mutation({
      query: (data) => ({
        url: "/contact/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useContactCreateMutation
} = Contact;