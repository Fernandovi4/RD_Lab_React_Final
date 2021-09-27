import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { Redirect} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearchedShowName } from '../../store/showsSlice'

const SearhBarContainer = () => {

  const [searchedText, setSearchedText] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = async (searchData) => {
    setSearchedText(searchData.search)
    dispatch(setSearchedShowName(searchData.search))
  }


  return(
    <div>
      <SearchBar onFormSubmit={onFormSubmit} />
      {searchedText && <Redirect to={`/search/shows:${searchedText}`}/>}
    </div>
  )
}

export default SearhBarContainer