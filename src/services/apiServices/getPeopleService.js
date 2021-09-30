import axios from "axios";

const axiosInstance = axios.create({
  baseURL: ` https://api.tvmaze.com`
})

export const peopleApi = {

  getPeople() {
    return axiosInstance.get(`/people`)
  },
  getSearchedPeople(searchedName){
    return axiosInstance.get(`/search/shows?q=${searchedName}`)
  }

}

