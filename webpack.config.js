const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/src/js/bytebank.ts',
  output: {
    filename: 'js/bytebank.js',
    path: path.resolve(__dirname, 'app/dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false, // Desabilita o tratamento de imagens
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /(node_modules|\.png$)/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerWebpackPlugin(), '...'],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/src/index.html',
      filename: 'index.html',
      hash: true,
    }),
    new CopyWebpackPlugin({ patterns: [{ from: './app/src/images', to: 'images' }] }),
    new MiniCssExtractPlugin({ filename: './css/app.css' }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  devServer: {
    static: { directory: path.resolve(__dirname, 'dist') },
    port: 3000,
  },
};
