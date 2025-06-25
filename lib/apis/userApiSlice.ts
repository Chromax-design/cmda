import { userTypes } from "@/data/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8090/api`,
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["users"],
    }),
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getAllUsers: builder.query<userTypes[], void>({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["users"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useGetAllUsersQuery,
  useLoginUserMutation,
} = userApi;
