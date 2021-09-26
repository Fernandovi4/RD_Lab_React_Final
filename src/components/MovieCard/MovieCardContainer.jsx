import MovieCard from './MovieCard'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addShowToFavorites, removeShowFromFavorites } from '../../store/currentUserSlice'


const MovieCardContainer = ({ showId, name, imgUrl, genres }) => {

  const history = useHistory()
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isAuth)

  const getIdOfShow = (showId) => {
    history.push(`/show:${showId}`)
  }

  const handleFollow = () => {
    isAuth ? dispatch(addShowToFavorites(showId)) :
      alert('Please logIn to have possibility of adding to favorites')
  }

  const handleUnFollow = () => {
    isAuth ? dispatch(removeShowFromFavorites(showId)) :
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