import React, { useEffect, useState } from 'react'

import OneShow from './OneShow'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addShowToFavorites, removeShowFromFavorites } from '../../store/currentUserSlice'
import { isAuth } from '../../store/authSlice'
import { stateShows } from '../../store/showsSlice'

const OneShowContainer = () => {

  const [showToRender, setShowToRender] = useState(null)
  const { id } = useParams()
  const showId = Number(id.split(':').join(''))
  const shows = useSelector((stateShows))
  const isAuthenticated = useSelector(isAuth)
  const dispatch = useDispatch()


  useEffect(() => {
    try {
      let showId = Number(id.split(':').join(''))
      let show = shows.filter(el => el.id === showId)
      setShowToRender(show[0])
    } catch (error) {
      console.log(new Error(error))
    }
  }, [id, showToRender, shows])

  const handleFollow = () => {
    isAuthenticated ? dispatch(addShowToFavorites(showId)) :
      alert('Please logIn to have possibility of adding to favorites')
  }

  const handleUnFollow = () => {
    isAuthenticated ? dispatch(removeShowFromFavorites(showId)) :
      alert('Please logIn to have possibility of adding to favorites')
  }

  return (!showToRender) ?
    // <Loader /> :todo
    <h1>Loading...</h1> :
    <OneShow
      show={showToRender}
      showId={showId}
      handleFollow={handleFollow}
      handleUnFollow={handleUnFollow}
    />
}

export default OneShowContainer