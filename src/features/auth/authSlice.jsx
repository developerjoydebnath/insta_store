import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    accessToken: undefined,
    user: undefined,
    loading: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.loading = false;
        },
        userLoggedOut: (state, action) => {
            state.user = undefined;
            state.accessToken = undefined;
            state.loading = false;
        },
        loading: (state, action) => {
            // console.log(action.payload.loading);
            state.loading = action.payload.loading;
        },
    },
});

export default authSlice.reducer;
export const { userLoggedIn, userLoggedOut, loading } = authSlice.actions;
