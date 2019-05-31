import pkg from './package'
const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.config.js')

export default {
  server: {
    port: 8882
  },

  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: "Foreskin Restoration Calculator",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.scss'],

  webfontloader: {
    google: {
      families: [
        'Montserrat:900',
        'Nunito:400,700'
      ]
    }
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-141040527-1"
      }
    ],
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: [
        require('tailwindcss')(tailwindJS),
        require('autoprefixer')
      ]
    }
  }
}
