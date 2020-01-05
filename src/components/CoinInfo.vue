<template lang="html">
  <div v-if="coinInfo">
      <p>{{coinInfo.description.en}}</p>
  </div>
</template>

<script>
export default {
  name: 'coin-info',
  props: ['coin','coinInfo'],
}
</script>

<style lang="css" scoped>
</style>
