export const state = () => ({
  location: {
    // lat: 4,
    // lng: 20
    lat: 51.46323,
    lng: -0.15943
  },
  results: []
})

export const getters = {
  getLocation: state => state.location,
  getResults: state => state.results
}

export const mutations = {
  SET_LOCATION (state, data) {
    state.location = data.location
  },
  SET_RESULTS (state, data) {
    state.results = data.results
  }
}

export const actions = {
  async getGeolocation ({ commit }) {
    const response = await this.$geolocation.getGeolocation()
    commit('SET_LOCATION', response)
  },
  async getNearbyPubs ({ getters, commit }) {
    const { getLocation } = getters
    const { lat, lng } = getLocation
    const response = await this.$places.getNearbyPubs(lat, lng, 1500)
    commit('SET_RESULTS', response)
  }
}
