import spotifyApi from '~/api/spotify'

export default (ctx, inject) => {
  inject('spotify', spotifyApi(ctx.$axios))
  ctx.store.dispatch('spotify/authenticate')
}
