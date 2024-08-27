<script>
import { getFlag, getPoster, rating } from '../../data/functions';
export default {
    props: {
        serie: Object
    },
    methods: {
        getFlag,
        getPoster,
        rating
    }
}
</script>
<template>
        <!-- <li>{{ serie.name }}</li>
        <li>{{ serie.original_name }}</li>
        <li><i :class="getFlag(serie.original_language)"></i></li>
        <li>
            <i v-for="vote in rating(serie.vote_average)" :key="`${vote}-${serie.id}`" class="fa-solid fa-star"></i>
            <i v-for="vote in (5 - rating(serie.vote_average))" :key="`void-${vote}-${serie.id}`" class="fa-regular fa-star"></i>
        </li> -->
        
        <div class="cover-box position-relative">
            <img class="py-3" :src="getPoster(serie.poster_path)" :alt="`Copertina di ${serie.original_name}`">
        </div>

</template>
<style lang="scss">
.cover-box {
    cursor: pointer;
    overflow: hidden;
    width: 100%;
    height: 400px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.unknown {
    display: inline-block;
    width: 20px;
    height: 16px;
    background-color: #fff;
    border: 1px solid black;
}
</style>