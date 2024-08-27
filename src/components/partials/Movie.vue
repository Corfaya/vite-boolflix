<script>
import { getFlag, getPoster, rating } from '../../data/functions';
export default {
    data() {
        return {
            infoVisible: false,
            onScreen: false
        }
    },
    props: {
        film: Object
    },
    methods: {
        getFlag,
        getPoster,
        rating,
        expand() {
            this.onScreen = !this.onScreen
        }
    }
}
</script>
<template>
    <!-- readme.md -->
    <div :class="['position-relative', 'movie-card', {'full-screen' : onScreen}]" @mouseover="infoVisible = true" @mouseout="infoVisible = false">
        <div class="cover-box position-relative">
            <img class="py-3" :src="getPoster(film.poster_path)" :alt="`Copertina di ${film.original_title}`">
            <div :class="['info', 'position-absolute', 'text-white', 'd-flex', 'flex-column', { 'infoOnScreen': onScreen || infoVisible }]"> 
                <h5 class="text-center">Titolo: {{ film.title }}</h5>
                <h6 class="text-center">Tit. originale: {{ film.original_title }}</h6>
                <div class="d-flex justify-content-between">
                    <span>Lang: <i :class="getFlag(film.original_language)"></i></span>
                    <span>
                        <i v-for="vote in rating(film.vote_average)" :key="`${vote}-${film.id}`"
                            class="fa-solid fa-star text-warning"></i>
                        <i v-for="vote in (5 - rating(film.vote_average))" :key="`void-${vote}-${film.id}`"
                            class="fa-regular fa-star text-white"></i>
                    </span>
                </div>
                <p>{{ film.overview }}</p>
                <div class="d-flex justify-content-center">
                    <button @click="expand" class="btn btn-sm btn-light expand">{{ onScreen ? "Torna indietro" : "Scopri di più" }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.movie-card {
    cursor: pointer;
    overflow: hidden;
    width: 100%;
    height: 400px;
    transition: all 0.3s ease;

    .cover-box {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .info {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #dc1a27d3;
            padding: 5px 6px;
            opacity: 0;
            transition: opacity 0.5s ease;

            &.infoOnScreen {
                opacity: 1;
            }

            h5 {
                letter-spacing: 1.5px;
                font-weight: bolder;
            }

            h6 {
                font-weight: 400;
            }

            p {
                margin-top: 3px;
                max-height: 150px;
                overflow: hidden;
            }

            .expand {
                max-width: 120px;
                max-height: 30px;
                display: none;
            }
        }
    }

    &:hover .info {
        opacity: 1
    }

    &:hover .info .expand, .full-screen .expand {
        display: block;
    }

    &.full-screen {
        position: fixed;
        top: 0;
        left: 0;
        min-width: 500px;
        max-width: 800px;
        height: 100vh;
        background: rgba(0, 0, 0, 0.8);
        z-index: 3;

        .info {
            overflow-y: auto;
            padding: 30px;
        }
    }

    .unknown {
        display: inline-block;
        width: 20px;
        height: 16px;
        background-color: #fff;
        border: 1px solid black;
    }
}
</style>