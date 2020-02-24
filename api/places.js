// const qs = require('querystring')

export default $axios => ({
  getNearbyPubs () {
    return $axios.$get(
      `/place/nearbysearch/json?location=51.463230,-0.159430&radius=1500&keyword=pub&key=${process.env.GOOGLE_API_KEY}&opennow=true`
    )
  }
})
