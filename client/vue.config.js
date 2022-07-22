const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})


module.exports = {
  outputDir: path.resolve(__dirname,'../server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000/',
      }
    }
  }
}