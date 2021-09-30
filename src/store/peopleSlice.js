import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  people: [],
  pageSize: 10,
  totalPeopleCount: 0,
  currentPage: 1,
  isFetchingData: false,
  followingInProgress: [],
  searchedName: ''
}


export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeopleList: (state, action) => {
      state.people = action.payload
    },
    setTotalPeopleCount: (state, action) => {
      state.totalPeopleCount = action.payload.totalPeopleCount
    },
    toggleLoader: (state, action) => {
      state.isFetchingData = action.payload
    },
    setSearchedName: (state, action) => {
      state.searchedName = action.payload
    },

  }
})

export const {
  setPeopleList,
  setTotalPeopleCount,
  toggleLoader,
  setSearchedName,
} = peopleSlice.actions

export const statePeople = state => state.people.people;
export const stateIsFetchingData = state => state.people.isFetchingData;


export default peopleSlice.reducer