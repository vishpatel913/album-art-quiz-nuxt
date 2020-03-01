import placesApi from '~/api/places'
import geolocationApi from '~/api/geolocation'

export default (ctx, inject) => {
  inject('places', placesApi(ctx.$axios))
  inject('geolocation', geolocationApi(ctx.$axios))
}
