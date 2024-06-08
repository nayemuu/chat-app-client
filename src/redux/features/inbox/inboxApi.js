/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { apiSlice } from '../api/apiSlice';

export const inboxApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    serchUser: builder.query({
      query: ({keyword}) => ({
        url: `/inbox/${keyword}`
      }),
    }),

  })
});

export const { useSerchUserQuery } = inboxApi;
