// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { RegisterUserRequest, RegisterUserResponse } from "../types/auth";

// // API service
// export const authApi = createApi({
//   reducerPath: "authApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000", 
//     // If your backend is separate, put full API URL in .env
//     prepareHeaders: (headers) => {
//       headers.set("Content-Type", "application/json");
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     register: builder.mutation<RegisterUserResponse, RegisterUserRequest>({
//       query: (body) => ({
//         url: "/api/v1/auth/signup",
//         method: "POST",
//         body,
//       }),
//     }),
//   }),
// });

// export const { useRegisterMutation } = authApi;


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { LoginRequest, LoginResponse, RegisterUserRequest, RegisterUserResponse } from "../types/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000", 
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    register: builder.mutation<RegisterUserResponse, RegisterUserRequest>({
      query: (body) => ({
        url: "api/v1/auth/signup", // no leading slash, so it appends to baseUrl
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "api/v1/auth/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation  } = authApi;
