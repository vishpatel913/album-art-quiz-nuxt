<template>
  <div class="container">
    <div>
      <logo />
      <h1>
        {{ title }}
      </h1>
      <p>
        Spotify album art quiz using Nuxtjs
      </p>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
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
