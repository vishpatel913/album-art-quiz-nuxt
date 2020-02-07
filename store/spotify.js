import { getUrlParams } from '../utils'

export const state = () => ({
  auth: {},
  artists: []
})

export const getters = {}
export const mutations = {
  setAuth (state, res) {
    state.auth = res
    // console.log('AUTH RES:', res)
  }
}

export const actions = {
  authenticate ({ commit }) {
    const params = getUrlParams(window.location.href)
    if (params.code) {
      // TODO: authenticate and save token to state
      // https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow
      return
    }
    const authUrl = new URL('https://accounts.spotify.com/authorize')
    const authParams = {
      client_id: process.env.SPOTIFY_CLIENT_ID,
      response_type: 'code',
      redirect_uri: process.env.CLIENT_URL,
      state: '123123123',
      scope: 'user-top-read'
    }
    authUrl.search = new URLSearchParams(authParams).toString()
    window.location = authUrl
  }
}
