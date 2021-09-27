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

export const refactorSearchShowsList = (showList) => {

  return showList.map(show => {
    show =  {
      id: show.show.id,
      name: show.show.name,
      imgUrl: show.show.image.medium,
      originalImgUrl: show.show.image.original,
      genres: show.show.genres,
      rating: show.show.rating.average,
      runtime: show.show.runtime,
      summary: show.show.summary,
      officialSite: show.show.officialSite,
      isInFavorites: false,
    }
    return show
  })
}