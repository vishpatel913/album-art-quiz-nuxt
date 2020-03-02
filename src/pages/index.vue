<template>
  <div class="container">
    <h1>Pub Finder</h1>
    <div>
      <p><strong>lat</strong>: {{ getLocation.lat }}</p>
      <p><strong>long</strong>: {{ getLocation.lng }}</p>
    </div>
    <h2>Nearest Pubs</h2>
    <p>{{ getResults.map(item => item.name) }}</p>
    <p><a href="https://vishpatel.com">Link to my site</a></p>
    <a-button @click="testClick">Button?</a-button>
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
  },
  methods: {
    testClick: () => {
      alert('It is a button!')
    }
  }
}
</script>

<style lang="less" scoped>
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
