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
        case "multipart":
          console.log("Payload 확인", data);
          const multipart = await instance({
            method,
            url,
            data,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return { data: multipart.data };  
        default:
          const res = await instance({ method, url, data });
          console.log(res);
          return { data: res.data.info };
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
  tagTypes: ["LOGIN","SIGNUP", "STORIES", "COMMENTS"],
  endpoints: (builder) => ({
    // Login
    loginRTK: builder.mutation({
      query: (payload) => ({
        url: "/api/auth/login",
        method: "post",
        data: payload,
        types: "login",
      }),
      providesTags: ["LOGIN"],
    }),

      // Login
    loginSNSRTK: builder.mutation({
      query: (payload) => ({
        url: `/api/auth/kakao?code=${payload}`,
        method: "post",
        data: payload,
        types: "login",
      }),
      providesTags: ["LOGIN"],
    }), 

    // SignUp
    signupRTK: builder.mutation({
      query: (payload) => ({
        url: "/api/auth/signup",
        method: "post",
        data: payload,
      }),
      providesTags: ["SIGNUP"],
    }),

    // STORIES - GET
    getStoriesRTK: builder.query({
      query: (pageNum) => ({
        url: `api/stories?page=${pageNum}&size=20`, //
        method: "get",
      }),
      providesTags: ["STORIES"],
    }),
    // STORIES - POST
    postStoriesRTK: builder.mutation({
      query: (payload) => ({
        url: "/api/stories/newstory",
        data: payload,
        method: "post",
      }),
      invalidatesTags: ["STORIES"],
    }),
    // STORIES - DELETE
    deleteStoriesRTK: builder.mutation({
      query: (id) => ({
        url: `/api/stories/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["STORIES"],
    }),
    // STORIES - PATCH
    patchStoriesRTK: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/api/stories/${id}`,
        data: payload,
        method: "patch",
        types: "multipart",
      }),
      invalidatesTags: ["STORIES"],
    }),
  //   // STORIES - Like
  //   postStoriesLikeRTK: builder.mutation({
  //     query: ({ id, payload }) => ({
  //       url: `/api/stories/${id}/like`,
  //       method: "post",
  //       providesTags: ["STORIES"],
  //     }),
  //   }),

    // STORIES_COMMENTS & 상세조회
    getStoriesCOmmentsRTK: builder.query({
      query: (id) => ({
        url: `/api/stories/${id}`,
        method: "get",
      }),
      providesTags: ["COMMENTS"],
    }),

    // STORIES_COMMENTS - POST
    postStoriesCOmmentsRTK: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/api/stories/${id}/comments`,
        data: payload,
        method: "post",
      }),
      invalidatesTags: ["COMMENTS"],
    }),

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
  useLoginSNSRTKMutation,

  // STORIES
  useGetStoriesRTKQuery,
  usePostStoriesRTKMutation,
  useDeleteStoriesRTKMutation,
  usePatchStoriesRTKMutation,
  // usePostStoriesLikeRTKMutaion,

  // STORIES_COMMENTS_DETAIL
  useGetStoriesCOmmentsRTKQuery,
  usePostStoriesCOmmentsRTKMutation,
  // useDeleteStoriesCOmmentsRTKMutation,
  // usePatchStoriesCOmmentsRTKMutation,
} = heavenRTKQuery;
