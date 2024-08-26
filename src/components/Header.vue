<script>
import { store } from "../store"
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        reqMovie(showName){
            this.$emit("getMovie", showName)
        }
    }
}
</script>
<template>
    <div class="container-fluid">
        <input @keyup.enter="reqMovie(store.clientInput)" type="text" placeholder="Search" v-model="store.clientInput">
        <button @click="reqMovie(store.clientInput)">Cerca</button>
    </div>
</template>
<style lang="scss">
</style>