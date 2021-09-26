import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import showsSlice from './showsSlice'
import curretUserSlice  from './currentUserSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    shows: showsSlice,
    currentUser: curretUserSlice
  },
})