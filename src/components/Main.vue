<script>
import { store } from '../store';
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
    }
}
</script>
<template>

    <main class="pt-main">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-light">I film più amati</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <SliderMovie />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h2 class="text-light">Le serie più amate</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <SliderTv />
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h2 class="text-light">Film</h2>
                </div>

            </div>

            <div class="row">
                <div class="col-6 col-md-4 col-lg-3" v-for="film in movies" :key="film.id">
                    <Movie :film="film" />
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <h2 class="text-light">Serie TV</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-6 col-md-4 col-lg-3" v-for="serie in series" :key="serie.id">
                    <Tv :serie="serie" />
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