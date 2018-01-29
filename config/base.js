/**
 * 公共配置
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        main: './src/main'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
        publicPath: ''
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            //监听以js或jsx结尾的文件
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            "presets": [
                                [
                                    "env",
                                    {
                                        "targets": {
                                            "browsers": [
                                                "> 1%",
                                                "ie >= 9"
                                            ]
                                        },
                                        "modules": false,
                                        "useBuiltIns": true,
                                        "debug": false,
                                        "loose": true
                                    }
                                ],
                                "react"
                            ],
                            plugins: [
                                'transform-object-rest-spread',
                                'transform-export-extensions'
                            ]
                        }
                    }
                ],
                exclude: [/node_modules/]
            },
            {
                test: /\.(png|gif|jpg|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            name: 'img/[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'font/[name].[ext]',
                            limit: 10000,
                            minetype: 'application/font-woff'
                        }
                    }
                ]
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'font/[name].[ext]',
                            limit: 10,
                            minetype: 'application/font-woff'
                        }
                    }
                ]
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'font/[name].[ext]',
                            limit: 10,
                            minetype: 'application/octet-stream'
                        }
                    }
                ]
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'font/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'font/[name].[ext]',
                            limit: 10,
                            minetype: 'image/svg+xml'
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'resolve-url-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery'
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css',
            allChunks: true
        })
    ],
    node: {
        fs: "empty"
    },
    resolve: {
        alias: {
            'public': path.resolve(__dirname, '../src/public')
        }
    }
};