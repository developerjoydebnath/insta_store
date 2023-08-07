import { apiSlice } from '../api/apiSlice';

export const resetPassApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: (email) => ({
        url: '/user/reset-password',
        method: 'POST',
        body: email,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          if (data?.email) {
            localStorage.setItem('resetPassEmail', data.email);
          }
        } catch (err) {
          // don nothing
        }
      },
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: '/user/verify-reset-token',
        method: 'POST',
        body: data,
      }),
    }),
    newPassword: builder.mutation({
      query: (data) => ({
        url: '/user/set-new-password',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useResetPasswordMutation, useVerifyOtpMutation, useNewPasswordMutation } = resetPassApi;
