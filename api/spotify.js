export default $axios => ({
  async getToken (code) {
    const result = await $axios.$post(
      'https://accounts.spotify.com/api/token',
      {
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.CLIENT_URL,
        headers: {
          Authorization: Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')
        }
      }
    )
    return result.data
  },
  async getArtists () {}
})
