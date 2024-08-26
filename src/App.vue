<script>
import { store } from './store';
import { getShows } from './data/apis';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
export default {
  components: {
    Header,
    Main
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getShows
  }
}
</script>

<template>
  <Header @getMovie="getShows" />
  <Main :movies="store.moviesArray" :series="store.seriesArray" />
</template>

<style lang="scss">
@use "./style/generals.scss";
</style>