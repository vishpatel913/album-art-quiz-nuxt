<template>
  <div class="container">
    <h1>Album Art Quiz</h1>
    <div v-if="isAuthed" class="user-container">
      <img :src="user.imageSrc" alt="Photo of you" />
      <h2>Hey there {{ user.name }}</h2>
    </div>
    <div v-else class="login-container">
      <h2>Login in with Spotify</h2>
      <p>
        <button @click="login" type="button" name="login">
          Login
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'userDetails',
      isAuthed: 'isAuthed'
    })
  },
  async fetch ({ store, query }) {
    const { code } = query
    if (code && !store.getters.tokenValid) {
      await store.dispatch('authenticate', code)
      await store.dispatch('retrieveUser')
    }
  },
  methods: {
    login () {
      const authUrl = new URL('https://accounts.spotify.com/authorize')
      const authParams = {
        client_id: process.env.SPOTIFY_CLIENT_ID,
        response_type: 'code',
        redirect_uri: process.env.CLIENT_URL,
        state: '123123123',
        scope: 'user-top-read user-read-private user-read-email'
      }
      authUrl.search = new URLSearchParams(authParams).toString()
      window.location = authUrl
    }
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
