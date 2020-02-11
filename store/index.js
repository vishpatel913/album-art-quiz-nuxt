import moment from 'moment'

export const state = () => ({
  auth: null,
  user: null,
  artists: []
})

export const getters = {
  isAuthed: state => !!state.auth && !!state.user,
  accessToken: state => state.auth && state.auth.access_token,
  tokenValid: state =>
    state.auth &&
    moment(state.auth.timestamp).add(state.auth.expires_in, 'seconds') >
      moment(),
  userDetails: state => ({
    name: state.user.display_name,
    imageSrc: state.user.images[0].url
  })
}

export const mutations = {
  setAuth (state, data) {
    state.auth = { ...data, timestamp: moment().format() }
  },
  setUserDetails (state, data) {
    state.user = data
  }
}

export const actions = {
  async authenticate ({ commit }, code) {
    const tokenData = await this.$spotify.token(code)
    commit('setAuth', tokenData)
  },
  async retrieveUser ({ commit, getters }) {
    const userData = await this.$spotify.userDetails(getters.accessToken)
    commit('setUserDetails', userData)
  }
}
