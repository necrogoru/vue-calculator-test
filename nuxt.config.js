export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'calculadora-credito',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Credit Calculator test' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/assets/images/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Niramit:200,300,400,500,600,700'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css', integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU', crossorigin: 'anonymous'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  // Router Setup
  router: {
    linkExactActiveClass: 'active'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
