import { baseApi } from "@/redux/api/baseApi";
const Report = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    ReportCreate: builder.mutation({
      query: ({ id, data }) => ({
        url: `/report/create/${id}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useReportCreateMutation
} = Report;
