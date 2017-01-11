/* eslint-disable */

var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var webpack = require('webpack')
var ROOT = path.resolve(__dirname, 'src');
var SRC = path.resolve(ROOT, 'js');
var DEST = path.resolve(__dirname, './dist');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: SRC + '/index.jsx'
  },
  resolve: {
    root: [
      path.resolve(ROOT, 'js'),
      path.resolve(ROOT, 'css')
    ],
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules']
  },
  output: {
    path: DEST,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  eslint: {
    configFile: './.eslintrc'
  },
  sassLoader: {
    includePaths: [ 'src/scss' ]
  },
  plugins: [
    new CopyWebpackPlugin([ 
      { from: 'src/react-datagrid-assets', to: 'react-datagrid-assets' },
      { from: 'src/index.html', to: 'index.html' },
      { from: 'src/css/genericons.css', to: 'css/genericons.css' },
      { from: 'src/data/', to: 'data' }
    ]),
    new ExtractTextPlugin('css/hoth.css')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        include: SRC, 
        query: {
          presets: ['react', 'es2015','stage-2']
        },
        exclude: path.join(__dirname, 'node_modules')
      },
      {
         test: /\.scss$/,
         loader: ExtractTextPlugin.extract(
                    'style', // The backup style loader
                    'css?sourceMap!sass?sourceMap'
                )
      },
      {test: /\.js$/, loaders: [ "babel-loader", "eslint-loader" ], exclude: ["/node_modules/","/coverage/"]},
      // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
      // loads bootstrap's css.
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};

