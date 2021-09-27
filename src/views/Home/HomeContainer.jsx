import React, { useEffect } from 'react'
import { showApi } from '../../services/apiServices/getShowesService'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import Home from './Home'
import { refactorShowsList } from '../../utils/refactorShowsList'
import { setShowsList, toggleLoader } from '../../store/showsSlice'

const HomeContainer = () => {

  const isFetchingData = useSelector((state) => state.shows.isFetchingData)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(toggleLoader(true))
    showApi.getShows()
      .then(result => {
          return dispatch(setShowsList(refactorShowsList(result.data)))
        },
        (error) => console.log(error))
    // dispatch(toggleLoader(false))
  }, [dispatch])

  return isFetchingData ?
    <Loader /> :
    <Home />


}

export default HomeContainer
