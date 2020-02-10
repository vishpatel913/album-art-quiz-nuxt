import { getUrlParams } from '../utils'

export const state = () => ({
  auth: null,
  artists: []
})

export const getters = {}
export const mutations = {
  setAuth (state, res) {
    state.auth = res
  }
}

export const actions = {
  async authenticate ({ commit, state }) {
    // const { auth } = state
    const { code } = getUrlParams(window.location.href)
    if (code) {
      const tokenData = await this.$spotify.getToken(code)
      commit('setAuth', tokenData)
      return
    }
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
