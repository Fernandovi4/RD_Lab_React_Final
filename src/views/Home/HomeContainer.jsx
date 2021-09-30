import React, { useEffect } from 'react'
import { showApi } from '../../services/apiServices/getShowesService'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import Home from './Home'
import { refactorShowsList } from '../../utils/refactorShowsList'
import { setShowsList, stateIsFetchingData, stateShows } from '../../store/showsSlice'
import { peopleApi } from '../../services/apiServices/getPeopleService'
import { setPeopleList, statePeople } from '../../store/peopleSlice'
import { refactorPeopleList } from '../../utils/refactorPeopleList'

const HomeContainer = () => {

  const isFetchingData = useSelector(stateIsFetchingData)
  const shows = useSelector(stateShows)
  const people = useSelector(statePeople)
  const dispatch = useDispatch()

  useEffect(() => {
    shows.length === 0 && showApi.getShows()
      .then(result => {
          return dispatch(setShowsList(refactorShowsList(result.data)))
        },
        (error) => console.log(new Error(error)))
  }, [dispatch, shows.length])

  useEffect(() => {
    people.length === 0 && peopleApi.getPeople()
      .then(result => {
          return dispatch(setPeopleList(refactorPeopleList(result.data)))
        },
        (error) => console.log(new Error(error)))
  }, [dispatch, people.length])

  return isFetchingData ?
    <Loader /> :
    <Home shows={shows} people={people}/>


}

export default HomeContainer
