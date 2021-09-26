export const refactorShowsList = (showList) => {

  return showList.map(show => {
    show =  {
      id: show.id,
      name: show.name,
      imgUrl: show.image.medium,
      originalImgUrl: show.image.original,
      genres: show.genres,
      rating: show.rating.average,
      runtime: show.runtime,
      summary: show.summary,
      officialSite: show.officialSite,
      isInFavorites: false,
    }
    return show
  })
}