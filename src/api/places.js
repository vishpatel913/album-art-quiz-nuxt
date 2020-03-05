export default $axios => ({
  getNearbyPubs (lat, lng, rad, data = {}) {
    const params = {
      location: `${lat},${lng}`,
      radius: '1500',
      keyword: 'pub',
      opennow: true,
      key: process.env.GOOGLE_API_KEY
    }
    return $axios.$get('/place/nearbysearch/json', { params })
  },
  getPubDetails (id) {
    const params = {
      place_id: id,
      fields: 'name,geometry,opening_hours,photos,rating,vicinity',
      key: process.env.GOOGLE_API_KEY
    }
    return $axios.$get('/place/details/json', { params })
  }
})
