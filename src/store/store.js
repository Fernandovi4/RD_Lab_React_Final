import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import showsSlice from './showsSlice'
import currentUserSlice  from './currentUserSlice'
import peopleSlice  from './peopleSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    shows: showsSlice,
    currentUser: currentUserSlice,
    people: peopleSlice
  },
})