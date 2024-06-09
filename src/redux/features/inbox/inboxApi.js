/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { apiSlice } from '../api/apiSlice';

export const inboxApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getConversation: builder.query({
      query: () => ({
        url: '/inbox/conversation',
      }),
    }),

    serchUser: builder.query({
      query: ({keyword}) => ({
        url: `/inbox/search/${keyword}`
      }),
    }),

    addConversation: builder.mutation({
      query: (data) => ({
        url: '/inbox/conversation',
        method: 'POST',
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          console.log('inside addConversation arg = ', arg);
          const result = await queryFulfilled;
          // console.log('inside addConversation  result = ', result);
        } catch (error) {
          //
        }
      }
    }),

  })
});

export const { useSerchUserQuery, useAddConversationMutation, useGetConversationQuery } = inboxApi;
