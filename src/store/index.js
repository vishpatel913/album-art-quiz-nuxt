export const state = () => ({
  coords: {
    lat: 51.46323,
    lng: -0.15943
  },
  location: 'Battersea',
  results: []
})

export const getters = {
  getCoordinates: state => state.coords,
  getLocation: state => state.location,
  getResults: state => state.results
}

export const mutations = {
  SET_COORDINATES (state, data) {
    state.coords = data.location
  },
  SET_LOCATION (state, data) {
    state.location = data.results[0].formatted_address
  },
  SET_RESULTS (state, data) {
    state.results = data.results
  }
}

export const actions = {
  async getGeolocation ({ commit }) {
    const response = await this.$geolocation.getGeolocation()
    commit('SET_COORDINATES', response)
  },
  async getGeocoding ({ getters, commit, dispatch }) {
    const { getCoordinates } = getters
    const { lat, lng } = getCoordinates
    const response = await this.$geocoding.getLocationFromCoords(lat, lng)
    commit('SET_LOCATION', response)
  },
  async getNearbyPubs ({ getters, commit, dispatch }) {
    const { getCoordinates } = getters
    const { lat, lng } = getCoordinates
    const response = await this.$places.getNearbyPubs(lat, lng, 1500)
    commit('SET_RESULTS', response)
  }
}
