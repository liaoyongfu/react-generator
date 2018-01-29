/**
 * 开发环境配置文件
 */
const path = require('path');
let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let baseConfig = require('./base');

module.exports = webpackMerge(baseConfig, {
    devServer: {
        port: 3000,
        //# 如果需要可以通过ip访问，请注释下面这一行
        // host: '0.0.0.0',
        hot: true,
        noInfo: true,
        open: false,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});