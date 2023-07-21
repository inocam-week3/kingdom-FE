import { instance } from "./instance";
import { createApi } from "@reduxjs/toolkit/query/react"

const axiosBaseQuery =
  () =>
  async ({ url, method, data, types }) => {
    try {
      switch (types) {
        case "login":
          const auth = await instance({ method, url, data });
          return { data: auth.data };
        default:
          const res = await instance({ method, url, data });
          return { data: res.data };
      }
    } catch (error) {
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
    tagTypes: ["POSTS"],
    endpoints: (builder) => ({
      // Login
      loginRTK: builder.mutation({
        query: (payload) => ({
          url: "/api/auth/login",
          method: "post",
          data: payload,
          types: "login",
        }),
      }),
    }),
  });
  
  export const {
    useLoginRTKMutation,

  } = heavenRTKQuery;
  