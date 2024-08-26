import axios from "axios";
import { store } from "../store";

export function getShows(showName) {
    let urlMovies = `${store.endpoint}${store.searchMovie}${store.keyApi}`
    let urlSeries = `${store.endpoint}${store.searchTv}${store.keyApi}`
    axios.get(`${urlMovies}&query=${showName}`).then((res) => {
        store.moviesArray = res.data.results
        console.log(store.moviesArray)
    })
    axios.get(`${urlSeries}&query=${showName}`).then((res) => {
        store.seriesArray = res.data.results
        console.log(store.seriesArray)
      })
}