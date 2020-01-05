<template lang="html">
  <div class="">
  <hr>
    <p v-on:click="handleClick">{{coinProp.name}}</p>
  </div>
</template>

<script>
// The import {thing} syntax indicates that we’re importing
//  object which isn’t the default export from that file
import {eventBus} from '../main.js'

export default {
  name: "coinListItem",
  props: ['coinProp'],
  methods: {
    handleClick(){
eventBus.$emit('coin-selected', this.coinProp)    }
  }
}
</script>

<style lang="css" scoped>
</style>
