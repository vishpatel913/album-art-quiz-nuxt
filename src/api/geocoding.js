export default $axios => ({
  getLocationFromCoords (lat, lng) {
    const params = {
      latlng: `${lat},${lng}`,
      key: process.env.GOOGLE_API_KEY
    }
    return $axios.$get('/geocode/json', {
      params
    })
  }
})
