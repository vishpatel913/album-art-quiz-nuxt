import placesApi from '~/api/places'

export default (ctx, inject) => {
  inject('places', placesApi(ctx.$axios))
}
