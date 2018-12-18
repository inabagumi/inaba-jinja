const CopyPlugin = require('copy-webpack-plugin')
const CrittersPlugin = require('critters-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ScriptExtHtmlPlugin = require('script-ext-html-webpack-plugin')
const path = require('path')

module.exports = (_, argv) => {
  const isProd = argv.mode === 'production'

  return {
    devtool: 'source-map',
    entry: {
      main: './src'
    },
    mode: isProd ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                fiber: require('fibers'),
                implementation: require('sass'),
                includePaths: [path.resolve('node_modules')],
                sourceMap: true
              }
            }
          ]
        },
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
      new CopyPlugin([path.resolve('static')]),
      isProd &&
        new MiniCssExtractPlugin({
          chunkFilename: '[name].[contenthash:5].css',
          filename: '[name].[contenthash:5].css'
        }),
      new HtmlPlugin({
        cache: false,
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        template: isProd
          ? '!!prerender-loader?string!./src/index.html'
          : './src/index.html'
      }),
      new ScriptExtHtmlPlugin({
        inline: /^main\.[^.]+\.js$/
      }),
      isProd &&
        new CrittersPlugin({
          noscriptFallback: false,
          preload: 'media',
          pruneSource: false
        })
    ].filter(Boolean),
    resolve: {
      extensions: ['.js', '.mjs', '.ts']
    }
  }
}
