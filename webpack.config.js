const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const pkg = require('./package.json');

module.exports = {
  entry: {
    'react-proview': './src/index.js',
    'react-proview.min': './src/index.js',
    'react-proview-core': './src/core.js',
    'react-proview-core.min': './src/core.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this' // temporary fix for https://github.com/webpack/webpack/issues/6525
  },
  // externals: []
  //   .concat(Object.keys(pkg.peerDependencies))
  //   .concat(Object.keys(pkg.dependencies)),
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/
      })
    ]
  }
};
