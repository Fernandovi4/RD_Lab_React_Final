import axios from "axios";

const axiosInstance = axios.create({
  baseURL: ` https://api.tvmaze.com`
})

export const showApi = {

  getShows() {
    return axiosInstance.get(`/shows`)
  },

}

