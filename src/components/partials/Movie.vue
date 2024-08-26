<script>
import { getFlag, getPoster } from '../../data/functions';
export default {
    props: {
        film: Object
    },
    methods: {
        getFlag,
        getPoster
    },
}
</script>
<template>
    <ul>
        <li>{{ film.title }}</li>
        <li>{{ film.original_title }}</li>
        <li><i :class="getFlag(film.original_language)"></i></li>
        <li>{{ film.vote_average }}</li>
        <li><img :src="getPoster(film.poster_path)" :alt="`Copertina di ${film.original_title}`"></li>
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