<template>
  <div class="container">
    <div>
      <h1>Welcome</h1>
      <p>
        The quiz will start soon
      </p>
    </div>
  </div>
</template>

<script>
export default {
  asyncData (ctx) {
    return {
      title: 'Album Art Quiz'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: $color-grey;
  letter-spacing: 1px;
}

p {
  font-weight: 300;
  font-size: 16px;
  color: $color-green;
  padding: 15px;
}
</style>
