/* para importaciones de css */
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  cssLoaderOptions: {
        url: false
      },
  /* exportar para server less*/
  //target: 'serverless'
  /* variables de entorno */
  env: {
    customKey: 'mundo'
  },
  /* exporta rutas estaticas */
  exportPathMap: function() {
    return {
      '/': { page: '/' },

      // '/callback/facebook': { page: '/callback/facebook', /*query: { access_token: '#access_token', data_access_expiration_time:"data_access_expiration_time", expires_in:"expires_in", state:"state" }*/ }
    };
  }
})