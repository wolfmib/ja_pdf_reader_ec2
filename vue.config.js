const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      fallback: {
        "zlib": require.resolve("browserify-zlib"),
	"stream": require.resolve("stream-browserify")
      }
    }, 
    module: {
      rules: [
        {
          test: /\.worker\.js$/,
          use: { loader: 'worker-loader' }
        }
      ]
    }
  },
  devServer: {
    watchFiles: ['public/**/*'] // Specify the files to watch for changes
  }
})


