var path = require('path')

var webpack = require('webpack')

var autoprefixer = require('autoprefixer')
var postcssShort = require('postcss-short')

var StylusNibPlugin = require('nib')

var ExtractTextPlugin = require("extract-text-webpack-plugin")

var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/loader'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src')
    }, {
      test: /\.coffee$/,
      loader: "coffee-loader"
    }, {
      test: /\.(coffee\.md|litcoffee)$/,
      loader: "coffee-loader?literate"
    }, {
      test: /\.(css|styl)$/,
      // loader: 'style-loader!css-loader!postcss-loader!stylus-loader',
      loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'stylus-loader'])
    }, {
      test: /\.hbs$/,
      loader: 'handlebars-loader'
    }, {
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  },

  postcss: function () {
    return [autoprefixer, postcssShort]
  },

  stylus: {
    use: [StylusNibPlugin()],
    import: ['~nib/lib/nib/index.styl']
  },

  resolve: {
    extensions: ['', '.js', '.coffee', '.styl', '.css', '.html'],
    root: [
      path.join(__dirname, 'src')
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new ExtractTextPlugin('bundle.css'),

    new HtmlWebpackPlugin({
      title: 'webpack react redux',
      template: './src/index.hbs'
    }),

    new webpack.ProvidePlugin({
      _: 'lodash',
      faker: 'faker',
      Horizon: '@horizon/client',
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ],

  devServer: {
    hot: true,
    historyApiFallback: true
  }
}
