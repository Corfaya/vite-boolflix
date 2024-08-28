<script>
import { getPoster } from '../../data/functions';
export default {
    props: {
        topSeries: Array
    },
    methods: {
        getPoster
    },
    computed: {
        // 4 posters for each slide
        threePerSlide() {
            const arrayImgSlide = [];
            // increases by 4 at each iteration
            for (let i = 0; i < this.topSeries.length; i += 4) {
                arrayImgSlide.push(this.topSeries.slice(i, i + 4));
            }
            return arrayImgSlide;
        },
        // tot of carousel slides
        slidesTotal() {
            return this.threePerSlide.length;
        }
    }
}
</script>
<template>
    <!-- BOOTSTRAP Carousel with changes -->
    <div id="carousel-move" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button v-for="(serie, i) in slidesTotal" :key="i" type="button" data-bs-target="#carousel-move"
                :data-bs-slide-to="i" class="active"></button>
        </div>
        <div class="carousel-inner">
            <!-- add "active" when index is the active slide -->
            <div class="carousel-item" v-for="slide, i in threePerSlide" :key="`sl-${i}`" :class="{ active: i == 0 }">
                <!-- Contenitore per miniature -->
                <div class="row">
                    <!-- Itera attraverso le miniature all'interno di una slide -->
                    <div class="col-3" v-for="thumb in slide" :key="thumb.id">
                        <img :src="getPoster(thumb.poster_path)" class="d-block w-100" :alt="thumb.title" />
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-move" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel-move" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
<style lang="scss" scoped>
.carousel-item img {
    max-height: 600px;
    object-fit: cover;
    object-position: bottom;
    margin-bottom: 10px;
}
</style>