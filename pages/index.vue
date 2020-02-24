<template>
  <div class="container">
    <h1>Pub Finder</h1>
    <!-- <h2>{{ nearestPub.name }}</h2> -->
  </div>
</template>

<script>
export default {
  fetch (ctx) {
    ctx.store.dispatch('getNearbyPubs')
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
