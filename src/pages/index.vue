<template>
  <div class="container">
    <h1>Pub Finder</h1>
    <p><strong>Location</strong>: {{ getLocation }}</p>
    <h2>Nearest Pubs</h2>
    <p>{{ getResults.map(item => item.name) }}</p>
    <p><a href="https://vishpatel.com">Link to my site</a></p>
    <a-button
      type="primary"
      shape="circle"
      size="large"
      icon="environment"
      @click="refresh"
    ></a-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch (ctx) {
    await ctx.store.dispatch('getGeolocation')
    await ctx.store.dispatch('getGeocoding')
    await ctx.store.dispatch('getNearbyPubs')
  },
  computed: {
    ...mapGetters(['getLocation', 'getResults']),
    nearestPubs: () => {}
  },
  methods: {
    refresh: () => {
      window.location.reload(true)
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
