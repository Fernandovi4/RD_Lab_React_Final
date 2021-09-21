import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  userId: null,
  userEmail: null,
  rememberMe: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUserData: (state,action) => {
      console.log(action)
      state.userId = action.payload.userId
      state.userEmail = action.payload.email
      state.rememberMe = action.payload.rememberMe
      state.isAuth = action.payload.isAuth
    },
  },
})

export const { setCurrentUserData } = authSlice.actions

export default authSlice.reducer