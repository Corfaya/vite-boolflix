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
  }
}
</script>

<template>
<Header />
<Main />
</template>

<style lang="scss">
@use "./style/generals.scss";
</style>