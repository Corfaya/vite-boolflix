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
  created() {
    this.getMovies()
  },
  methods: {
    getMovies(movie){
      let url = `${this.store.endpoint}${this.store.searchMovie}${this.store.keyApi}`
      axios.get(`${url}&query=${movie}`).then((res) => {
       this.store.movieArray = res.data.results
       console.log(this.store.movieArray)
      })
    }
  }
}
</script>

<template>
<Header @getMovie="getMovies"/>
<Main />
</template>

<style lang="scss">
@use "./style/generals.scss";
</style>