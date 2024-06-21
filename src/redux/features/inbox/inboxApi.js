/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { apiSlice } from '../api/apiSlice';

export const inboxApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getConversation: builder.query({
      query: () => ({
        url: '/inbox/conversations',
      }),
    }),

    serchUser: builder.query({
      query: ({keyword}) => ({
        url: `/inbox/search/${keyword}`
      }),
    }),

    sendMessage: builder.mutation({
      query: (data) => ({
        url: '/inbox/message',
        method: 'POST',
        body: data
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          // console.log('inside addConversation arg = ', arg);
          const result = await queryFulfilled;
          // console.log('inside addConversation  result = ', result);
        } catch (error) {
          //
        }
      }
    }),

    getMessages: builder.query({
      query: ({ id, limit, offset }) => ({ url: `/inbox/messages/${id}?limit=${limit}&offset=${offset}` }),
    }),

    

  })
});

export const { useSerchUserQuery, useSendMessageMutation, useGetConversationQuery, useGetMessagesQuery } = inboxApi;
