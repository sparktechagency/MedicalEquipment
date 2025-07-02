import { baseApi } from "@/redux/api/baseApi";
const Payment = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    paymentCreate: builder.mutation({
      query: (id) => ({
        url: `/payment/create_checkout_session/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const { usePaymentCreateMutation } = Payment;