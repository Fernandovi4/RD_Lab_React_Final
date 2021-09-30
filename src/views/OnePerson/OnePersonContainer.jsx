import React, { useEffect, useState } from 'react'

import OnePerson from './OnePerson'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  addPeopleToFollowed,
  removePeopleFromFollowed,

} from '../../store/currentUserSlice'
import { isAuth } from '../../store/authSlice'
import { statePeople } from '../../store/peopleSlice'

const OnePersonContainer = () => {

  const [personToRender, setPersonToRender] = useState(null)
  const { id } = useParams()
  const personId = Number(id.split(':').join(''))
  const persons = useSelector((statePeople))
  const isAuthenticated = useSelector(isAuth)
  const dispatch = useDispatch()


  useEffect(() => {
    try {
      let personId = Number(id.split(':').join(''))
      let person = persons.filter(el => el.id === personId)
      setPersonToRender(person[0])
    } catch (error) {
      console.log(new Error(error))
    }
  }, [id, personToRender, persons])

  const handleFollow = () => {
    isAuthenticated ? dispatch(addPeopleToFollowed(personId)) :
      alert('Please logIn to have possibility of adding to favorites')
  }

  const handleUnFollow = () => {
    isAuthenticated ? dispatch(removePeopleFromFollowed(personId)) :
      alert('Please logIn to have possibility of adding to favorites')
  }

  return (!personToRender) ?
    // <Loader /> :todo
    <h1>Loading...</h1> :
    <OnePerson
      person={personToRender}
      personId={personId}
      handleFollow={handleFollow}
      handleUnFollow={handleUnFollow}
    />
}

export default OnePersonContainer