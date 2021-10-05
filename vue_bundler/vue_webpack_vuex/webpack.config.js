const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve : {
    extensions : ['.vue', '.js'],
    alias : {
      '~' : path.resolve(__dirname , 'src')
    }
  },
  entry : './src/main.js',
  output : {
    path:path.resolve(__dirname, 'dist'),
    publicPath:'/',
    clean:true
  },
  // You may need an appropriate loader to handle this file type
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        use:'babel-loader'
      },
      {
        test : /\.vue$/,
        use : 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: ['vue-style-loader',
          'css-loader',
          'sass-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins : [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template : path.resolve(__dirname , 'src/index.html')
    }),
  ],
  devServer:{
    historyApiFallback : true
  }
}
