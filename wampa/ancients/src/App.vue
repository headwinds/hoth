<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button v-on:click="handleTwitterLoginClick">sign in wiht twitter</button>
    <Cards msg="Vue"/>
  </div>
</template>

<script>
import Cards from './components/Cards.vue'
import * as axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      hand: null,
      loading: true,
      errored: null,
    }
  },
  methods: {
      handleTwitterLoginClick: function(event){

      axios.get('http://127.0.0.1:5000/twitter/auth').then( response => {
            //
            console.log("Twitter response: ", response);
           
          }
        ).catch(error => {

          console.log("Twitter response: ", response.data);
         
          this.errored = error
        }).finally(() => this.loading = false);

    },
  },
  components: {
    Cards
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
