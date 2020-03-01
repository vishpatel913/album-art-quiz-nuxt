<template>
  <div class="container">
    <h1>Pub Finder</h1>
    <h2>lat: {{ getLocation.lat }}</h2>
    <h2>long: {{ getLocation.lng }}</h2>
    <h3>Nearest Pubs: {{ getResults.map(item => item.name) }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch (ctx) {
    await ctx.store.dispatch('getGeolocation')
    await ctx.store.dispatch('getNearbyPubs')
  },
  computed: {
    ...mapGetters(['getLocation', 'getResults']),
    nearestPubs: () => {}
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
