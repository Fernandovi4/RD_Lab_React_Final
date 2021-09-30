import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import Peoples from './Peoples'
import { refactorPeopleList } from '../../utils/refactorPeopleList'
import { setPeopleList, statePeople } from '../../store/peopleSlice'
import { filterPeople } from '../../utils/filterPeople'
import { peopleApi } from '../../services/apiServices/getPeopleService'

const PeoplesContainer = () => {

  const [filterParams, setFilterParams] = useState(null)
  const [sortedPeople, setSortedPeople] = useState(null)
  const people = useSelector(statePeople)
  const dispatch = useDispatch()

  const handleFiltration = val => setFilterParams(val)

  useEffect(() => {
    (filterParams !== null) && setSortedPeople(filterPeople(people, filterParams))
  }, [filterParams, people])

  useEffect(() => {
    people.length === 0 && peopleApi.getPeople()
      .then(result => dispatch(setPeopleList(refactorPeopleList(result.data))))
      .catch((error) => console.log(new Error(error)))

  }, [dispatch, people.length])


  return (!people && !sortedPeople) ?
    <Loader /> :
    <Peoples people={sortedPeople || people} handleFiltration={handleFiltration} />

}

export default PeoplesContainer
