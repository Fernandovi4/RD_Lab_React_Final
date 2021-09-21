import MovieCard from './MovieCard'
import { movie } from '../../../Temp/movie'

const MovieCardContainer = () => {

  return <MovieCard
    name={movie.name}
    imgUrl={movie.image.medium}
    genres={[...movie.genres].join(' / ')}
  />
}

export default MovieCardContainer