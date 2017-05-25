// const NEV_ROOT = '../../src/webapp/res/js/lib/nev/repo';
// const nevConfig = require(NEV_ROOT + '/webpack.config');

module.exports = {
  // context: __dirname,
  // entry: './index.js',
  // output: {
  //   path: __dirname,
  //   pathinfo: true,
  //   filename: 'testBundle.js',
  //   chunkFilename: '[name].js',
  // },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: [
          ['es2015', {
            'modules': false
          }]
        ],
        plugins: ['transform-object-assign', 'transform-object-rest-spread'],
      }
    }, {
      test: /\.html$/,
      loader: 'raw-loader'
    }, {
      test: /\.js$/,
      exclude: /(test|spec|node_modules|bower_components)/,
      loader: 'istanbul-instrumenter-loader'
    }]
  },
  // externals: ['nev' ],
  // resolve: {
  //   alias: Object.assign({
  //     nev: path.resolve(__dirname, NEV_ROOT + '/index.js'),
  //     'expression-analyzer': '@netease/expression-analyzer/build/browser/expression-analyzer'
  //   }, nevConfig.resolve.alias)
  // },
  devtool: 'inline-source-map',
  watch: process.env.NODE_ENV !== 'test'
};