<script>
import { store } from '../store';
import Tv from './partials/Tv.vue';
import Movie from './partials/Movie.vue';
export default {
    components: {
        Tv,
        Movie
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
    <div class="container">
        <main class="pt-main">
            <h2 class="text-light">Film</h2>
            <Movie v-for="film in movies" :key="film.id" :film="film"/>
            <h2 class="text-light">Serie TV</h2>
            <Tv v-for="serie in series" :key="serie.id" :serie="serie"/>
        </main>
    </div>
    
</template>
<style lang="scss">
.pt-main {
    padding-top: 100px
}
</style>