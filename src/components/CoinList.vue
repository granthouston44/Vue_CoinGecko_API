<template lang="html">
  <div class="">
    <p v-for="p in paginatedData" :value="p" :key="p.id">
      <!-- This is how we would get things to display in the old fashioned
      ruby-esque way of doing things. However, we actually want to display
      data as a component from the coinite.vue
      <h4>{{coin.name}}</h4> -->
      <coin-list-item v-bind:coinProp="p"/>
    </p>
    <button @click="prevPage">Prev</button>
    <button @click="nextPage">Next</button>
  </div>
</template>

<script>
import CoinListItem from './CoinItem.vue'


export default {
name: "coin-list",
data(){
  return {
    currentPage: 0,
  }
},
props: {coinsProp: Array,
size:{
  type: Number,
  required: false,
  default: 10
}},

computed: {
  pageCount(){
    let l = this. coinsProp.length,
    s = this.size
    return Math.ceil(l/s)
  },
  paginatedData(){
    const start = this.currentPage * this.size,
    end = start + this.size

    return this.coinsProp.slice(start, end)
  }
},
components: {
  "coin-list-item": CoinListItem
},
methods: {
  nextPage(){
    this.currentPage++;
  },
  prevPage(){
    this.currentPage--
  }
}
}
</script>

<style lang="css" scoped>
</style>
