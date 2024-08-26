<script>
import { store } from './store';
import axios from 'axios';
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
    getMovies(movie){
      let url = `${store.endpoint}${store.searchMovie}${store.keyApi}`
      axios.get(`${url}&query=${movie}`).then((res) => {
       store.movieArray = res.data.results
       console.log(store.movieArray)
      })
    }
  }
}
</script>

<template>
<Header @getMovie="getMovies"/>
<Main :movie="store.movieArray"/>
</template>

<style lang="scss">
@use "./style/generals.scss";
</style>