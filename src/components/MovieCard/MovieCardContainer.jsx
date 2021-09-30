import MovieCard from './MovieCard'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addShowToFavorites, removeShowFromFavorites } from '../../store/currentUserSlice'
import { isAuth } from '../../store/authSlice'


const MovieCardContainer = ({ showId, name, imgUrl, genres }) => {

  const history = useHistory()
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(isAuth)

  const getIdOfShow = (showId) => {
    history.push(`/show:${showId}`)
  }

  const handleFollow = () => {
    isAuthenticated ? dispatch(addShowToFavorites(showId)) :
      alert('Please logIn to have possibility of adding to favorites')
  }

  const handleUnFollow = () => {
    isAuthenticated ? dispatch(removeShowFromFavorites(showId)) :
      alert('Please logIn to have possibility of adding to favorites')
  }


  return <MovieCard
    showId={showId}
    name={name}
    imgUrl={imgUrl}
    genres={[...genres].join(' / ')}
    handleClick={getIdOfShow}
    handleFollow={handleFollow}
    handleUnFollow={handleUnFollow}
  />
}

export default MovieCardContainer