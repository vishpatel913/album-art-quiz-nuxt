import placesApi from '~/api/places'
import geolocationApi from '~/api/geolocation'
import geocodingApi from '~/api/geocoding'

export default (ctx, inject) => {
  inject('places', placesApi(ctx.$axios))
  inject('geolocation', geolocationApi(ctx.$axios))
  inject('geocoding', geocodingApi(ctx.$axios))
}
