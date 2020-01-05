<template lang="html">
  <div class="">
    <p v-for="coin in paginatedData" :value="coin" :key="coin.id">
      <!-- This is how we would get things to display in the old fashioned
      ruby-esque way of doing things. However, we actually want to display
      data as a component from the coinite.vue
      <h4>{{coin.name}}</h4> -->
      <coin-list-item v-bind:coinProp="coin"/>
      <trend
      :data="[1]"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
      auto-draw
      smooth>
    </trend>
    </p>
    <button @click="prevPage">Prev</button>
    <button @click="nextPage">Next</button>
  </div>
</template>

<script>
import CoinListItem from './CoinItem.vue'
import {Trend} from '../main.js'


export default {
name: "coin-list",
data(){
  return {
    currentPage: 0,
    sparkDataArrayTest: []
  }
},
props: {coinsProp: Array,
size:{
  type: Number,
  required: false,
  default: 10
}},
mounted(){
    this.getSpark()
  },
computed: {
  pageCount(){
    let l = this.coinsProp.length,
    s = this.size
    return Math.ceil(l/s)
  },
  paginatedData(){
    const start = this.currentPage * this.size,
    end = start + this.size

    return this.coinsProp.slice(start, end)
  },
},
components: {
  "coin-list-item": CoinListItem
},
methods: {
  nextPage(){
    this.currentPage++;
      this.paginatedData.forEach((item,index) =>
      {
        fetch(`https://api.coingecko.com/api/v3/coins/${item.id}?localization=false&market_data=true&community_data=false&developer_data=false&sparkline=true`)
        .then(response => response.json())
        .then(coinJSON => this.sparkDataArrayTest.push(coinJSON))
      })
      return this.sparkDataArrayTest
    },
  prevPage(){
    this.currentPage--
      this.paginatedData.forEach((item,index) =>
      {
        fetch(`https://api.coingecko.com/api/v3/coins/${item.id}?localization=false&market_data=true&community_data=false&developer_data=false&sparkline=true`)
        .then(response => response.json())
        .then(coinJSON => this.sparkDataArrayTest.pop(coinJSON))
      })
      return this.sparkDataArrayTest
    },
    getSpark(){
      this.paginatedData.forEach((item,index) =>
      {
        fetch(`https://api.coingecko.com/api/v3/coins/${item.id}?localization=false&market_data=true&community_data=false&developer_data=false&sparkline=true`)
        .then(response => response.json())
        .then(coinJSON => this.sparkDataArrayTest.push(coinJSON))
      })
      return this.sparkDataArrayTest
    }
    }
  }

</script>

<style lang="css" scoped>
</style>
