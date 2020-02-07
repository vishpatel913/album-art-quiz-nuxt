// import createSpotify from '~/api/spotify'

export default (ctx, inject) => {
  console.log('isServer', !!ctx && !!ctx.req)
  ctx.store.dispatch('spotify/authenticate')
}
