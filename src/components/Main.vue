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
            switch (lang) {
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
                case "ja":
                    return "fi fi-jp"
                case "nl":
                    return "fi fi-nl"
                case "de":
                    return "fi fi-de"
                case "zh":
                    return "fi fi-cn"
                case "ru":
                    return "fi fi-ru"
                case "ko":
                    return "fi fi-kr"
                default:
                    return "unknown"
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
.unknown {
    display: inline-block;
    width: 20px;
    height: 16px;
    background-color: #fff;
    border: 1px solid black;
}
</style>