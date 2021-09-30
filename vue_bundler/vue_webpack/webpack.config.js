const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry : './src/main.js',
  output : {
    path:path.resolve(__dirname, 'dist'),
    clean:true
  },
  // You may need an appropriate loader to handle this file type
  module : {
    rules : [
      {
        test : /\.vue$/,
        use : 'vue-loader'
      }
    ]
  },
  plugins : [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template : path.resolve(__dirname , 'src/index.html')
    })
  ]
}
