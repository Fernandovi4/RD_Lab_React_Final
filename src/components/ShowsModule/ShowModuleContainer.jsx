import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import ShowsModule from './ShowsModule'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllShows, toggleLoader } from '../../store/showsSlice'

const ShowModuleContainer = ({ title, url }) => {

  const shows = useSelector((state) => state.shows.shows)
  const isFetchingData = useSelector((state) => state.shows.isFetchingData)
  const dispatch = useDispatch




  // useEffect(() => {
  //   dispatch(fetchAllShows())
  // }, [dispatch])
  //todo

  return isFetchingData ?
    <Loader /> :
    <ShowsModule shows={shows.slice(0,6)} title={title} url={url} />
}

export default ShowModuleContainer