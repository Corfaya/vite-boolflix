<script>
import { store } from "../store"
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        reqMovie(showName) {
            this.$emit("getMovie", showName)
            this.store.clientInput = ""
        }
    }
}
</script>
<template>
    <header class="py-3">
        <div class="container-fluid">
            <div class="d-flex justify-content-between">
                <div class="w-logo">
                    <img class="img-fluid" src="../../public/boolflix.png" alt="Logo">
                </div>
                <div class="input-group mb-3 w-form">
                    <input class="form-control" @keyup.enter="reqMovie(store.clientInput)" type="text" placeholder="Movies or series tonight?"
                        v-model="store.clientInput">
                    <button class="btn btn-outline-secondary" type="button"
                        @click="reqMovie(store.clientInput)"><i class="fa-solid fa-magnifying-glass"></i> Cerca</button>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss">
header {
    .w-logo {
        max-width: 150px;
    }

    .w-form {
        max-width: 300px;
    }
}
</style>