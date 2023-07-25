import { instance } from "./instance";
import { createApi } from "@reduxjs/toolkit/query/react";

const axiosBaseQuery =
  () =>
  async ({ url, method, data, types }) => {
    try {
      switch (types) {
        case "login":
          const auth = await instance({ method, url, data });
          console.log("로그인 성공", auth);
          return { data: auth.headers.authorization };
        default:
          const res = await instance({ method, url, data });
          console.log(res);
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
  tagTypes: ["LOGIN", "STORIES", "COMMENTS"],
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

    // SignUp
    signupRTK: builder.mutation({
      query: (payload) => ({
        url: "/api/auth/signup",
        method: "post",
        data: payload,
      }),
    }),

  //   // STORIES - GET
  //   getStoriesRTK: builder.useQuery({
  //     query: () => ({
  //       url: "/api/stories",
  //       method: "get",
  //       providesTags: ["STORIES"],
  //     }),
  //   }),
  //   // STORIES - POST
  //   postStoriesRTK: builder.mutation({
  //     query: (payload) => ({
  //       url: "/api/stories",
  //       data: payload,
  //       method: "post",
  //       providesTags: ["STORIES"],
  //     }),
  //   }),
  //   // STORIES - DELETE
  //   deleteStoriesRTK: builder.mutation({
  //     query: ({ id, payload }) => ({
  //       url: `/api/stories/${id}`,
  //       data: payload,
  //       method: "delete",
  //       providesTags: ["STORIES"],
  //     }),
  //   }),
  //   // STORIES - PATCH
  //   patchStoriesRTK: builder.mutation({
  //     query: ({ id, payload }) => ({
  //       url: `/api/stories/${id}`,
  //       data: payload,
  //       method: "patch",
  //       providesTags: ["STORIES"],
  //     }),
  //   }),
  //   // STORIES - Like
  //   postStoriesLikeRTK: builder.mutation({
  //     query: ({ id, payload }) => ({
  //       url: `/api/stories/${id}/like`,
  //       method: "post",
  //       providesTags: ["STORIES"],
  //     }),
  //   }),

  //   // STORIES_COMMENTS & 상세조회
  //   getStoriesCOmmentsRTK: builder.useQuery({
  //     query: ({ id, payload }) => ({
  //       url: `/api/stories/${id}`,
  //       method: "get",
  //       providesTags: ["COMMENTS"],
  //     }),
  //   }),

  //   // STORIES_COMMENTS - POST
  //   postStoriesCOmmentsRTK: builder.mutation({
  //     query: ({ id, payload }) => ({
  //       url: `/api/stories/${id}/comments`,
  //       data: payload,
  //       method: "post",
  //       providesTags: ["COMMENTS"],
  //     }),
  //   }),

  //   // STORIES_COMMENTS - DELETE
  //   deleteStoriesCOmmentsRTK: builder.mutation({
  //     query: ({ postId, commentsId }) => ({
  //       url: `/api/stories/${postId}/comments/${commentsId}`,
  //       method: "delete",
  //       providesTags: ["COMMENTS"],
  //     }),
  //   }),

  //   // STORIES_COMMENTS - PATCH
  //   patchStoriesCOmmentsRTK: builder.mutation({
  //     query: ({ postId, commentsId, payload }) => ({
  //       url: `/api/stories/${postId}/comments/${commentsId}`,
  //       data: payload,
  //       method: "patch",
  //       providesTags: ["COMMENTS"],
  //     }),
  //   }),
  }),
});

export const {
  // Auth
  useLoginRTKMutation,
  useSignupRTKMutation,

  // STORIES
  // useGetStoriesRTKQuery,
  // usePostStoriesRTKMutation,
  // useDeleteStoriesRTKMutaion,
  // usePatchStoriesRTKMutation,
  // usePostStoriesLikeRTKMutaion,

  // STORIES_COMMENTS_DETAIL
  // useGetStoriesCOmmentsRTKQuery,
  // usePostStoriesCOmmentsRTKMutation,
  // useDeleteStoriesCOmmentsRTKMutation,
  // usePatchStoriesCOmmentsRTKMutation,
} = heavenRTKQuery;
