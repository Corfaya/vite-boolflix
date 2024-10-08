import { reactive } from "vue";

export const store = reactive({
    endpoint: "https://api.themoviedb.org/3",
    imageEndpoint: "https://image.tmdb.org/t/p/",
    keyApi: "?api_key=747394736cc143b01facf6a72cd532fe",
    searchMovie: "/search/movie",
    searchTv: "/search/tv",
    popMovies: "/movie/popular",
    popSeries: "/tv/popular",
    moviesArray: [],
    seriesArray: [],
    topMovies: [],
    topSeries: [],
    clientInput: ""
})