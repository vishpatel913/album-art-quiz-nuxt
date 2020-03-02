import themeConfig from './theme.config'

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
  loading: { color: '#1da57a' },
  plugins: ['@/plugins/googleMaps', '@/plugins/ant-design-ui'],
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader'
  ],
  css: [
    'ant-design-vue/dist/antd.less',
    '@/assets/less/_variables.less',
    '@/assets/less/global.less'
  ],
  styleResources: {
    less: ['@/assets/less/_variables.less']
  },
  dotenv: {
    path: './'
  },
  axios: {
    baseURL: 'https://maps.googleapis.com/maps/api',
    credentials: false,
    proxyHeaders: false
  },
  pwa: {
    manifest: {
      name: 'Pubs Nearby'
    }
  },
  webfontloader: {
    google: {
      families: ['Quicksand:300,400,500,600,700']
    }
  },
  serverMiddleware: [],
  build: {
    extend (config, ctx) {},
    loaders: {
      less: {
        modifyVars: {
          ...themeConfig
        },
        javascriptEnabled: true
      }
    }
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
