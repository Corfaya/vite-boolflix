<script>
import { getFlag, getPoster } from '../../data/functions';
export default {
    props: {
        serie: Object
    },
    methods: {
        getFlag,
        getPoster
    }
}
</script>
<template>
    <ul>
        <li>{{ serie.name }}</li>
        <li>{{ serie.original_name }}</li>
        <li><i :class="getFlag(serie.original_language)"></i></li>
        <li>{{ serie.vote_average }}</li>
        <li><img :src="getPoster(serie.poster_path)" :alt="`Copertina di ${serie.original_name}`"></li>
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