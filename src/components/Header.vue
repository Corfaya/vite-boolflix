<script>
import { store } from "../store"
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        reqMovie(movie){
            this.$emit("getMovie", movie)
        }
    }
}
</script>
<template>
    <div class="container-fluid">
        <input type="text" placeholder="Search" v-model="store.clientInput">
        <button @click="reqMovie(store.clientInput)">Cerca</button>
    </div>
</template>
<style lang="scss">
</style>