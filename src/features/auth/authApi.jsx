import { apiSlice } from '../api/apiSlice';
import { loading, userLoggedIn, userLoggedOut } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: '/user/login',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                dispatch(loading({ loading: true }));
                try {
                    const { data } = await queryFulfilled;

                    if (data) {
                        // save logged in info in redux store
                        dispatch(
                            userLoggedIn({
                                accessToken: data.data.accessToken,
                                user: data.data.user,
                            }),
                        );
                    }
                } catch (err) {
                    if (err?.error?.status !== 200) {
                        dispatch(loading({ loading: false }));
                    }
                }
            },
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: '/user/signup',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;
                    localStorage.setItem(
                        'auth',
                        JSON.stringify({
                            accessToken: data.data.accessToken,
                            user: data.data.user,
                        }),
                    );

                    // save logged in info in redux store
                    dispatch(
                        userLoggedIn({
                            accessToken: data.data.accessToken,
                            user: data.data.user,
                        }),
                    );
                } catch (err) {
                    //do nothing
                }
            },
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/user/logout',
                method: 'POST',
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                const { data } = await queryFulfilled;

                if (data?.success) {
                    dispatch(userLoggedOut());
                }
            },
        }),
    }),
});

export const { useLoginMutation, useLogoutMutation, useSignupMutation } = authApi;
