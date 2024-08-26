<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },
    props: {
        movie: Array
    },
    methods: {
        getFlag(lang) {
            switch(lang) {
                case "it":
                return "fi fi-it"
                case "en":
                return "fi fi-gb"
                case "us":
                return "fi fi-us"
                case "fr":
                return "fi fi-fr"
                case "es":
                return "fi fi-es"
                case "pt":
                return "fi fi-pt"
                default:
                break
            }
        }
    }
}
</script>
<template>
    <ul v-for="film in movie" :key="film.id">
        <li>{{ film.title }}</li>
        <li>{{ film.original_title }}</li>
        <li><i :class="getFlag(film.original_language)"></i></li>
        <li>{{ film.vote_average }}</li>
    </ul>
</template>
<style lang="scss">
</style>