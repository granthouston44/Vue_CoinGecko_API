<template>
  <div id="app">
    <!-- When binding something, the colon gives it the prop name
    This means that we are expecting that prop name wherever it is getting passed
    Whatever value is in the equals, refers to the data that we are passing down as a
    prop
    </tbody>
   -->
    <h1>CoinTrek</h1>
    <coin-list v-bind:coinsProp="coins"/>
    <coin-info :coin="selectedCoin" :coinInfo="coinInfo"/>
  </div>
</template>

<script>
import CoinInfo from './components/CoinInfo.vue'
import CoinList from './components/CoinList.vue'
import {eventBus} from './main.js'

export default {
  name: 'app',
  components: {
    "coin-list": CoinList,
    "coin-info": CoinInfo
  },
  data () {
    return {
      coins: [],
      selectedCoin: null,
      coinInfo: []
    }
  },
  mounted() {
fetch("https://api.coingecko.com/api/v3/coins/list")
.then(response => response.json())
.then(coinsJSON => this.coins = coinsJSON)

eventBus.$on('coin-selected', (coin)=> {
  this.selectedCoin = coin
})
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
