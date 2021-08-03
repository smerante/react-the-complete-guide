
import { createSlice } from '@reduxjs/toolkit';
export const INITIAL_AUTH_STATE = {
    isAuthenticated: false,
    userName: null,
    pw: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_AUTH_STATE,
    reducers: {
        login: (state, action) => {
            if (action.payload.userName && action.payload.password) {
                state.isAuthenticated = true;
                state.userName = action.payload.userName;
                state.pw = action.payload.password;
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.pw = null;
            state.userName = null;
        }
    }
});

export const AUTH_ACTIONS = authSlice.actions;
export default authSlice;