<script>
import { store } from '../store';
import { getTopMovies, getTopSeries } from '../data/apis';
import Tv from './partials/Tv.vue';
import Movie from './partials/Movie.vue';
import SliderMovie from './partials/SliderMovie.vue';
import SliderTv from './partials/SliderTv.vue';
export default {
    components: {
        Tv,
        Movie,
        SliderMovie,
        SliderTv
    },
    data() {
        return {
            store
        }
    },
    props: {
        movies: Array,
        series: Array
    },
    created() {
        getTopMovies(),
        getTopSeries()
    }
}
</script>
<template>

    <main class="pt-main">
        <div class="container">
            <!-- Movies slider -->
            <div class="row">
                <div class="col-12">
                    <h2 class="text-light">I film più amati</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <SliderMovie :topMovies="store.topMovies"/>
                </div>
            </div>
            <!-- Tvs slider -->
            <div class="row">
                <div class="col-12">
                    <h2 class="text-light">Le serie più amate</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <SliderTv :topSeries="store.topSeries"/>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h2 class="text-light">Film</h2>
                    <h5 v-if="!movies || movies.length == 0" class="text-light">Qui visualizzerai i film che stai cercando. Effettua prima una ricerca</h5>
                </div>

            </div>

            <div class="row">
                <div v-if="movies && movies.length > 0" class="col-6 col-md-4 col-lg-3" v-for="film in movies" :key="film.id">
                    <Movie :film="film" />
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <h2 class="text-light my-5">Serie TV</h2>
                    <h5 v-if="!series || series.length == 0" class="text-light">Qui visualizzerai le serie che stai cercando. Effettua prima una ricerca</h5>
                </div>
            </div>

            <div class="row">
                <div class="col-6 col-md-4 col-lg-3" v-for="serie in series" :key="serie.id">
                    <Tv v-if="series && series.length > 0" :serie="serie" />
                </div>
            </div>

        </div>
    </main>


</template>
<style lang="scss">
.pt-main {
    padding-top: 100px
}
</style>