const path = require('path')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = function(env, argv) {
  const isProduction = argv.mode === 'production'

  return {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    devtool: isProduction ? false : 'source-map',
    mode: 'development',
    output: {
      path: path.resolve(__dirname, 'dist/webpack'),
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        },
        {
          test: /\.svg/,
          loader: 'file-loader',
        },
      ],
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist/webpack'),
      historyApiFallback: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.webpack.html'),
      }),
      new BundleAnalyzerPlugin(),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  }
}
