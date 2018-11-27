const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (_, argv) => {
  const isProd = argv.mode === 'production';

  return {
    devtool: 'source-map',
    entry: {
      main: './src'
    },
    mode: isProd ? 'production' : 'development',
    module: {
      rules: [
        {
          resolve: {
            extensions: ['.mjs', '.js'],
            mainFields: ['module']
          },
          test: /\.mjs$/
        },
        {
          exclude: /\/node_modules\//,
          loader: 'ts-loader',
          test: /\.ts$/
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: false
        }
      }
    },
    output: {
      chunkFilename: isProd ? '[name].[chunkhash:5].js' : '[name].js',
      filename: isProd ? '[name].[chunkhash:5].js' : '[name].js',
      path: path.resolve('build', 'public'),
      publicPath: '/'
    },
    plugins: [
      new CopyPlugin([
        path.resolve('static')
      ]),
      new HtmlPlugin({
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        template: './src/index.html'
      })
    ],
    resolve: {
      extensions: ['.js', '.mjs', '.ts']
    }
  };
}
