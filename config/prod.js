/**
 * 生产环境配置文件
 */
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let baseConfig = require('./base');

module.exports = webpackMerge(baseConfig, {
    plugins: [
        new CleanWebpackPlugin([
            'dist'
        ], {
            root: path.resolve(__dirname, '../'),
            exclude: [],
            verbose: true,
            dry: false
        })
    ]
});