<script>
import { getFlag, getPoster, rating } from '../../data/functions';
export default {
    data() {
        return {
            // info visibility
            infoVisible: false,
            // modal visibility
            onScreen: false
        }
    },
    props: {
        serie: Object
    },
    methods: {
        getFlag,
        getPoster,
        rating,
        // method for modal visibility
        expand() {
            this.onScreen = !this.onScreen
            if (this.onScreen) {
                // scroll disable when modal is visible
                document.body.style.overflow = "hidden"
            } else {
                // scroll enabled when modal isn't visible
                document.body.style.overflow = "auto"
            }
        }
    }
}
</script>
<template>
    <div>
        <!-- BS MODAL: modal for overlay, modal-dialog and modal-lg for modal-window container -->
         <!-- Modal is visible only if onScreen = true -->
        <div v-if="onScreen" class="modal fade show d-flex align-items-center justify-content-center"
             @click.self="expand">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Titolo: {{ serie.name }}</h5>
                        <!-- BS button to close modal clicking on "x" -->
                        <button type="button" class="btn-close" aria-label="Close"
                            @click="expand"></button>
                    </div>
                    <div class="modal-body">
                        <img class="py-3" :src="getPoster(serie.poster_path)"
                            :alt="`Copertina di ${serie.original_name}`">
                        <div class="d-flex justify-content-between">
                            <span>Lang: <i :class="getFlag(serie.original_language)"></i></span>
                            <span>
                                <i v-for="vote in rating(serie.vote_average)" :key="`${vote}-${serie.id}`"
                                    class="fa-solid fa-star text-warning"></i>
                                <i v-for="vote in (5 - rating(serie.vote_average))" :key="`void-${vote}-${serie.id}`"
                                    class="fa-regular fa-star text-white"></i>
                            </span>
                        </div>
                        <p>{{ serie.overview }}</p>
                    </div>
                </div>
            </div>
        </div>

        
        <!-- mouseover/mouseout to handle hover -->
        <div class="position-relative serie-card" @mouseover="infoVisible = true"
            @mouseout="infoVisible = false">

            <div class="cover-box position-relative">
                <img class="py-3" :src="getPoster(serie.poster_path)" :alt="`Copertina di ${serie.original_name}`">
                <div
                    :class="['info', 'position-absolute', 'text-white', 'd-flex', 'flex-column', { 'infoOnScreen': onScreen || infoVisible }]">
                    <h5 class="text-center">Titolo: {{ serie.name }}</h5>
                    <h6 class="text-center">Tit. originale: {{ serie.original_name }}</h6>
                    <div class="d-flex justify-content-between">
                        <span>Lang: <i :class="getFlag(serie.original_language)"></i></span>
                        <span>
                            <i v-for="vote in rating(serie.vote_average)" :key="`${vote}-${serie.id}`"
                                class="fa-solid fa-star text-warning"></i>
                            <i v-for="vote in (5 - rating(serie.vote_average))" :key="`void-${vote}-${serie.id}`"
                                class="fa-regular fa-star text-white"></i>
                        </span>
                    </div>
                    <p>{{ serie.overview }}</p>
                    <div class="d-flex justify-content-center">
                        <button @click="expand" class="btn btn-sm btn-light expand">Scopri di più</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<style lang="scss">
.modal.fade.show {
    background-color: #1c1c1cb3;
}

.modal-content {
    padding: 30px;
}

.serie-card {
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
            height: 400px;
            background-color: #dc1a27d3;
            padding: 5px 6px;
            opacity: 0;
            transition: all 0.5s ease;

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
                max-height: 130px;
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

    &:hover .expand, .infoOnScreen .expand {
        display: block !important;
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