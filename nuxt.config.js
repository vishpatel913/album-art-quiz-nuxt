export default {
  mode: 'universal',
  srcDir: 'src/',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#1DB954' },
  css: ['@/assets/scss/_variables.scss'],
  plugins: ['~/plugins/googleMaps'],
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['@/assets/scss/_variables.scss']
  },
  dotenv: {
    path: './'
  },
  axios: {
    baseURL: 'https://maps.googleapis.com/maps/api',
    credentials: false,
    proxyHeaders: false
  },
  serverMiddleware: [],
  build: {
    extend (config, ctx) {}
  },
  babel: {
    presets ({ isServer }) {
      return [
        [
          require.resolve('@nuxt/babel-preset-app'),
          {
            buildTarget: isServer ? 'server' : 'client',
            corejs: { version: 3 }
          }
        ]
      ]
    }
  }
}
