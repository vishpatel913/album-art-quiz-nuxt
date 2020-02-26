export default $axios => ({
  getGeolocation () {
    const params = {
      key: process.env.GOOGLE_API_KEY
    }
    return $axios.$post(
      'https://www.googleapis.com/geolocation/v1/geolocate',
      null,
      {
        params
      }
    )
  }
})
