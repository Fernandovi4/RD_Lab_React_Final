export const refactorPeopleList = (peopleList) => {

  return peopleList.map(person => {
    person =  {
      id: person.id,
      name: person?.name,
      imgUrl: person?.image?.medium,
      originalImgUrl: person?.image?.original,
      gender: person?.gender,
      birthday: person?.birthday,
      deathday: person?.deathday,
      country: person?.country?.name,
      officialSite: person?.url,
      isInFavorites: false,
    }
    return person
  })
}

