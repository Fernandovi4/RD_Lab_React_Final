export const filterPeople = (people, filterParams) => {
  console.log(filterParams)

  const { gender, country} = filterParams
  let sortedByGender, sortedByCountry, result

  sortedByGender = genderFiltration(people, gender)
  sortedByCountry = countryFiltration(sortedByGender, country)
  result = sortedByCountry

  return result
}

function genderFiltration(peopleList, gender) {
  return !gender ? peopleList : peopleList.filter(person => person.gender === gender)
}

function countryFiltration(peopleList, country) {
  return !country ? peopleList : peopleList.filter(person => person.country === country)
}



