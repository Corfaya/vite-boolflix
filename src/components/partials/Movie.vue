<script>
import { getFlag, getPoster, rating } from '../../data/functions';
export default {
    props: {
        film: Object
    },
    methods: {
        getFlag,
        getPoster,
        rating
    }
}
</script>
<template>
    <ul>
        <li>{{ film.title }}</li>
        <li>{{ film.original_title }}</li>
        <li><i :class="getFlag(film.original_language)"></i></li>
        <li><i v-for="vote in rating(film.vote_average)" :key="`${vote}-${film.id}`" class="fa-solid fa-star text-warning"></i>
            <i v-for="vote in (5 - rating(film.vote_average))" :key="`void-${vote}-${film.id}`" class="fa-regular fa-star text-body-tertiary"></i>
        </li>
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