'use strict'

const path = require('path')
const webpack = require('webpack')
const validator = require('webpack-validator')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const crp = new ExtractTextPlugin('crp.css')
const styles = new ExtractTextPlugin('[name]-[hash].css')

module.exports = validator({
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-[hash].js',
    },
    plugins:[
        styles,
        crp,
        new HtmlPlugin({
          title: 'learning how to be react ninja dev',
          inject: false,
          template: path.join(__dirname, 'src', 'html', 'template.html')
        }),

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    module: {
      preLoaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'standard'
      }],
      loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          include: /src/,
          loader: 'babel'
      },{
        test: /\.css$/,
        exclude: /node_modules|(search|style)\.css/,
        include: /src/,
        loader: styles.extract('style', 'css?modules')
      },{
        test: /(search|style)\.css/,
        exclude: /node_modules/,
        include: /src/,
        loader: crp.extract('style', 'css?modules')
      }]
    }
})
