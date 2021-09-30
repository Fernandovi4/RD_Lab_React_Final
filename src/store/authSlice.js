import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  currentUserId: null,
  currentUserEmail: null,
  rememberMe: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUserData: (state,action) => {
      state.currentUserId = action.payload.userId
      state.currentUserEmail = action.payload.email
      state.rememberMe = action.payload.rememberMe
      state.isAuth = action.payload.isAuth
    },
  },
})

export const { setCurrentUserData } = authSlice.actions

export const isAuth = state => state.auth.isAuth;

export default authSlice.reducer