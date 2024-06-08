/* eslint-disable import/prefer-default-export */
import { apiSlice } from '../api/apiSlice';
import { userLoggedIn } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          // console.log('arg = ', arg);
          const result = await queryFulfilled;
          // console.log('result = ', result);
          // console.log('result.data.accessToken = ', result.data.accessToken);
          // console.log('result.data.name = ', result.data.name);
          // console.log('result.data.email = ', result.data.email);

          localStorage.setItem(
            'auth',
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.name,
              email: result.data.email,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.name,
              email: result.data.email,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),

    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          // console.log('arg = ', arg);
          const result = await queryFulfilled;
          // console.log('result = ', result);
          // console.log('result.data.accessToken = ', result.data.accessToken);
          // console.log('result.data.name = ', result.data.name);
          // console.log('result.data.email = ', result.data.email);

          localStorage.setItem(
            'auth',
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.name,
              email: result.data.email,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.name,
              email: result.data.email,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = authApi;
