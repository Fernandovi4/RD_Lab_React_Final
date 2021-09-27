import React, { useEffect, useState } from 'react'

import OneShow from './OneShow'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import { addShowToFavorites, removeShowFromFavorites } from '../../store/currentUserSlice'

const OneShowContainer = () => {

  const [showToRender, setShowToRender] = useState(null)
  const { id } = useParams()
  const showId = Number(id.split(':').join(''))
  const shows = useSelector((state) => state.shows.shows)
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isAuth)

  useEffect( () => {
    try {
      let showId = Number(id.split(':').join(''))
      let show = shows.filter(el => el.id === showId)
      setShowToRender(show[0])
    } catch (er) {
      console.log(er)
    }
  }, [id, showToRender, shows])

  const handleFollow = () => {
    isAuth ? dispatch(addShowToFavorites(showId)) :
      alert('Please logIn to have posibility of adding to favorites')
  }

  const handleUnFollow = () => {
    isAuth ? dispatch(removeShowFromFavorites(showId)) :
      alert('Please logIn to have posibility of adding to favorites')
  }

  return (!showToRender) ?
    // <Loader /> :todo
    <h1> </h1>:
    <OneShow
      show={showToRender}
      showId={showId}
      handleFollow={handleFollow}
      handleUnFollow={handleUnFollow}
    />
}

export default OneShowContainer