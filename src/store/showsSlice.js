import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { showApi } from '../services/apiServices/getShowesService'

const initialState = {
  shows: [],
  pageSize: 10,
  totalShowsCount: 0,
  currentPage: 1,
  isFetchingData: false,
  followingInProgress: [],
  searchedShowName: ''
}

export const fetchAllShows = createAsyncThunk(
  'shows/fetchAllShows',
  async () => {

    const response = await showApi.getShows()
    console.log('!!!')
    return response.data
  },
)

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setShowsList: (state, action) => {
      state.shows = action.payload
    },
    setTotalShowsCount: (state, action) => {
      state.totalShowsCount = action.payload.totalShowsCount
    },
    toggleLoader: (state, action) => {
      state.isFetchingData = action.payload
    },
    setSearchedShowName: (state, action) => {
      state.searchedShowName = action.payload
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllShows.fulfilled, (state, action) => {
      state.shows = action.payload
    })
  },
})

export const {
  setShowsList,
  setTotalShowsCount,
  toggleLoader,
  setSearchedShowName,
} = showsSlice.actions

export default showsSlice.reducer