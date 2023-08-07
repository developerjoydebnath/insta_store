import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    credentials: 'include',
    prepareHeaders: async (headers, { getState, endpoint }) => {
        const token = getState().auth.accessToken;

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: async (args, api, extraOptions) => {
        const result = await baseQuery(args, api, extraOptions);
        if (result?.error?.status === 401) {
            // dispatch logout action
            // also clear the local storage
        } else {
            // console.log(result);
        }
        return result;
    },
    tagTypes: [],
    endpoints: (builder) => ({}),
});
