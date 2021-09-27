import React, { useEffect, useState } from 'react'
import SearchShow from './SearchShow'
import { useSelector } from 'react-redux'
import { showApi } from '../../services/apiServices/getShowesService'
import { refactorSearchShowsList } from '../../utils/refactorShowsList'
import Loader from '../../components/Loader/Loader'


const SearchShowContainer = () => {

  const searchedName = useSelector((state) => state.shows.searchedShowName)
  const [showsToRender, setShowsToRender] = useState(null)

  useEffect(() => {

    showApi.getSearchedShows(searchedName)
      .then(result => {
          try {
            setShowsToRender(refactorSearchShowsList(result.data))
          } catch (error) {
            console.log(new Error(error))
          }
        },
        (error) => console.log(new Error(error)))
  }, [searchedName])

  return (
    !showsToRender ?
      <Loader /> :
      <SearchShow
        shows={showsToRender}
        searchedName={searchedName}
      />
  )
}

export default SearchShowContainer

