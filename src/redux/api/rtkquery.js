import { instance } from "./instance";
import { createApi } from "@reduxjs/toolkit/query/react"

const axiosBaseQuery =
  () =>
  async ({ url, method, data, types }) => {
    try {
      switch (types) {
        case "Auth":
          const auth = await instance({ method, url, data });
          console.log("로그인/회원가입 성공", auth);
          return { data: auth.headers.authorization };
        default:
          const res = await instance({ method, url, data });
          return { data: res.data };
      }
    } catch (error) {
      console.log("로그인/회원가입 실패", error.response);
      const serializedError = {
        message: error.message,
        name: error.name,
        code: error.code,
      };
      return { error: serializedError };
    }
  };

  export const heavenRTKQuery = createApi({
    baseQuery: axiosBaseQuery(),
    tagTypes: ["LOGIN"],
    endpoints: (builder) => ({
      // Login
      loginRTK: builder.mutation({
        query: (payload) => ({
          url: "/api/auth/login",
          method: "post",
          data: payload,
          types: "Auth",
        }),
      }),

      // SignUp
      signupRTK: builder.mutation({
        query: (payload) => ({
          url: "/api/auth/signup",
          method: "post",
          data: payload,
          types: "Auth",
        }),
      }),
    }),
  });
  
  export const {
    useLoginRTKMutation,
    useSignupRTKMutation,

  } = heavenRTKQuery;
  