import { reactive } from "vue";

export const store = reactive({
    keyApi: "?api_key=747394736cc143b01facf6a72cd532fe",
    endpoint: "https://api.themoviedb.org/3",
    searchMovie: "/search/movie",
    searchTv: "/search/tv"
})