export const getUrlParams = (url) => {
  let queryString = url ? url.split('?')[1] : window.location.search.slice(1)
  const obj = {}

  if (queryString) {
    queryString = queryString.split('#')[0]
    const queryArray = queryString.split('&')

    for (let i = 0; i < queryArray.length; i++) {
      const keyValue = queryArray[i].split('=')
      obj[keyValue[0]] = keyValue[1]
    }
  }

  return obj
}
