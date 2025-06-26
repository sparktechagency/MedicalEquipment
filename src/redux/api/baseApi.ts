"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://d7003.sobhoy.com/api/v1",
    prepareHeaders: (headers, { getState }) => {
      // Extract the token correctly by parsing the stringified token object
      const token = (getState() as RootState).auth.token?.replace(/['"]+/g, "");
      console.log(token);
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: [
    "recipe",
    "user",
    "product",
    "rating",
    "comment",
    "order",
    "Earnings",
  ],
  endpoints: () => ({}),
});
