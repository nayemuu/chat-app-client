/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { apiSlice } from '../api/apiSlice';


const apiWithTag = apiSlice.enhanceEndpoints({ addTagTypes: ["conversations"] })


export const inboxApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({

    getConversation: builder.query({
      query: () => ({
        url: '/inbox/conversations',
      }),
      providesTags: (result, error, arg) => ['conversations']
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
      invalidatesTags:['conversations'],
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
