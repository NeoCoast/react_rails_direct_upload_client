import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    createPost: builder.mutation({
      invalidatesTags: ['Post'],
      query: (data) => ({
        body: data,
        method: 'POST',
        url: '/posts',
      }),
    }),
    getPosts: builder.query({
      providesTags: ['Post'],
      query: () => ({
        method: 'GET',
        url: '/posts',
      }),
    }),
  }),
  reducerPath: 'api',
  tagTypes: ['Post'],
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
} = api;
