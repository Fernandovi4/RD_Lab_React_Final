import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import Shows from './Shows'
import { filterShows } from '../../utils/filterShows'

const ShowsContainer = () => {

  const [filterParams, setFilterParams] = useState(null)
  const [sortedShows, setSortedShows] = useState(null)
  const shows = useSelector((state) => state.shows.shows)

  const handleFiltration = val => setFilterParams(val)

  useEffect(() => {
    (filterParams !== null) && setSortedShows(filterShows(shows, filterParams))
  }, [filterParams, shows])


  return (!shows && !sortedShows) ?
    <Loader /> :
    <Shows shows={sortedShows || shows} handleFiltration={handleFiltration} />

}

export default ShowsContainer
