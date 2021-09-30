import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import Shows from './Shows'
import { filterShows } from '../../utils/filterShows'
import { showApi } from '../../services/apiServices/getShowesService'
import { setShowsList, stateShows } from '../../store/showsSlice'
import { refactorShowsList } from '../../utils/refactorShowsList'

const ShowsContainer = () => {

  const [filterParams, setFilterParams] = useState(null)
  const [sortedShows, setSortedShows] = useState(null)
  const shows = useSelector(stateShows)
  const dispatch = useDispatch()

  const handleFiltration = val => setFilterParams(val)

  useEffect(() => {
    (filterParams !== null) && setSortedShows(filterShows(shows, filterParams))
  }, [filterParams, shows])

  useEffect(() => {
    shows.length === 0 && showApi.getShows()
      .then(result => dispatch(setShowsList(refactorShowsList(result.data))))
      .catch((error) => console.log(new Error(error)))

  }, [dispatch, shows.length])


  return (!shows && !sortedShows) ?
    <Loader /> :
    <Shows shows={sortedShows || shows} handleFiltration={handleFiltration} />

}

export default ShowsContainer
