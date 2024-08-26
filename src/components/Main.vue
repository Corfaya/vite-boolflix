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
    }
}
</script>
<template>
    <ul v-for="film in movie" :key="film.id">
        <li>{{ film.title }}</li>
        <li>{{ film.original_title }}</li>
        <li>{{ film.original_language }}</li>
        <li>{{ film.vote_average }}</li>
    </ul>
</template>
<style lang="scss">
</style>