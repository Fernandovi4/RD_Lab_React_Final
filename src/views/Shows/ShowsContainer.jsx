import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import Shows from './Shows'

const ShowsContainer = () => {

  const [filterParams, setFilterParams] = useState(null)
  const shows = useSelector((state) => state.shows.shows)

  const handleFiltration = async (val) => {
    await setFilterParams(val)
  }


  return (!shows) ? <Loader /> :
    <Shows shows={shows} handleFiltration={handleFiltration} />

}

export default ShowsContainer
