export const state = () => ({
  location: {
    lat: 51.46323,
    long: -0.15943
  },
  results: []
})

export const getters = {
  getLocation: state => state.location
}

export const mutations = {
  SET_RESULTS (state, data) {
    state.results = data
  }
}

export const actions = {
  async getNearbyPubs ({ getters, commit }) {
    const { getLocation } = getters
    const response = await this.$places.getNearbyPubs(getLocation)
    commit('SET_RESULTS', response)
  }
}
