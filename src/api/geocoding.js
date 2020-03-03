export default $axios => ({
  getLocationFromCoords (lat, lng) {
    const params = {
      latlng: `${lat},${lng}`,
      key: process.env.GOOGLE_API_KEY
    }
    return $axios.$get('https://maps.googleapis.com/maps/api/geocode/json', {
      params
    })
  }
})
