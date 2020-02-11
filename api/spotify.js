const qs = require('querystring')
const SPOTIFY_API_URL = 'https://api.spotify.com/v1'

export default $axios => ({
  async token (code) {
    const requestBody = {
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.CLIENT_URL
    }
    const config = {
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
          ).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    const result = await $axios.$post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(requestBody),
      config
    )
    return result
  },

  async userDetails (token) {
    const result = await $axios.$get(`${SPOTIFY_API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return result
  },

  async artists () {}
})
