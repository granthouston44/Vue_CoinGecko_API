<template lang="html">
  <div v-if="coin">
      <p>{{coin.symbol}}</p>
  </div>
</template>

<script>
export default {
  name: 'coin-info',
  props: ['coin'],
}
</script>

<style lang="css" scoped>
</style>
