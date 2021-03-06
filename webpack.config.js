const path    = require('path')
const webpack = require('webpack')
const DEBUG = !(process.env.NODE_ENV === 'production')

const distDir = 'dist/assets/'

console.log(DEBUG)

module.exports = {
  mode: DEBUG ? 'development' : 'production',
  entry: [
    `${__dirname}/src/js/index.js`
  ],
  output: {
    path: `${__dirname}/${distDir}/js`,
    filename: 'bundle.js'
  },
  devtool: DEBUG ? 'eval' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery'
    // })
  ]
};
