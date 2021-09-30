import PersonCard from './PersonCard'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  addPeopleToFollowed,
  removePeopleFromFollowed,

} from '../../store/currentUserSlice'
import { isAuth } from '../../store/authSlice'


const PersonCardContainer = (
  {
    personId,
    name,
    imgUrl,
    gender,
    birthday,
    deathday,
    country,
    officialSite
  }) => {

  const history = useHistory()
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(isAuth)

  const getIdOfPerson = (personId) => {
    history.push(`/person:${personId}`)
  }

  const handleFollow = () => {
    isAuthenticated ? dispatch(addPeopleToFollowed(personId)) :
      alert('Please logIn to have possibility of adding to favorites')
  }

  const handleUnFollow = () => {
    isAuthenticated ? dispatch(removePeopleFromFollowed(personId)) :
      alert('Please logIn to have possibility of adding to favorites')
  }


  return <PersonCard
    personId={personId}
    name={name}
    imgUrl={imgUrl}
    gender={gender}
    birthday={birthday}
    deathday={deathday}
    country={country}
    officialSite={officialSite}
    handleClick={getIdOfPerson}
    handleFollow={handleFollow}
    handleUnFollow={handleUnFollow}
  />
}

export default PersonCardContainer