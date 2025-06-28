import { baseApi } from "@/redux/api/baseApi";



const Report = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    ReportCreate: builder.mutation({
      query: (data) => ({
        url: "Report",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useReportCreateMutation
} = Report;
