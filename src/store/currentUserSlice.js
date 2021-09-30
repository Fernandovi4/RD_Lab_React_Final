import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUserId: null,
  favoriteShows: [],
  followedPeople: [],

}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUserId: (state, action) => {
      state.currentUserId = action.payload
    },
    addShowToFavorites: (state, action) => {
      if (!state.favoriteShows.some(el => el === action.payload)) {
        state.favoriteShows.push(action.payload)
      }
    },
    removeShowFromFavorites: (state, action) => {
      state.favoriteShows = state.favoriteShows.filter(el => el !== action.payload)
    },
    addPeopleToFollowed: (state, action) => {
      state.followedPeople.push(action.payload)
    },
    removePeopleFromFollowed: (state, action) => {
      state.followedPeople = state.followedPeople.filter(el => el !== action.payload)
    },
  },

})

export const {
  addShowToFavorites,
  removeShowFromFavorites,
  addPeopleToFollowed,
  removePeopleFromFollowed,
  setCurrentUserId,

} = currentUserSlice.actions

export const followedPeople = state => state.currentUser.followedPeople
export const stateFavoriteShows = state => state.currentUser.favoriteShows

export default currentUserSlice.reducer