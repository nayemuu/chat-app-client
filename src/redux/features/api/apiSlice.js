import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedOut } from '../auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: (headers, { getState, endpoint }) => {
    const token = getState()?.auth?.accessToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
})

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: async (args, api, extraOptions) =>{
    let results = await baseQuery(args, api, extraOptions);
    // console.log("results = ",results);
    if(results?.error?.status === 401){
      // console.log("results.error.status = ",results.error.status);
      const accessToken = api.getState()?.auth?.accessToken;
      // console.log("accessToken = ", accessToken);
      if (accessToken){ 
        api.dispatch(userLoggedOut())
        localStorage.clear();
        api.dispatch(apiSlice.util.resetApiState());
      }    
    }

    return results;
  },

  endpoints: (builder) => ({
    fetchData: builder.query({ query: () => ({ url: '/auth/test' }) }),
  }),
});

export const { useFetchDataQuery } = apiSlice;
