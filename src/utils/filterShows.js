export const filterShows = (shows, filterParams) => {

  const { genre, rating, runtime } = filterParams
  let sortedByGenre, sortedByRating, sortedByRuntime, result

  sortedByGenre = genreFiltration(shows, genre)
  sortedByRating = ratingFiltration(sortedByGenre, rating)
  sortedByRuntime = runtimeFiltration(sortedByRating, runtime)
  result = sortedByRuntime

  return result
}

function genreFiltration(showsList, genre) {
  const matchGenre = (element) => element === genre
  return !genre ? showsList : showsList.filter(show => show.genres.some(matchGenre))
}

function ratingFiltration(showsList, rating) {
  return !rating ? showsList : showsList.filter(show => show.rating >= rating)
}

function runtimeFiltration(showsList, runtime) {
  return !runtime ? showsList : showsList.filter(show => show.runtime === Number(runtime))
}


