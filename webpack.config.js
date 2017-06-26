var webpack = require('webpack');
var path = require('path');
var React = require('react');
var ReactDOM = require('react-dom');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, 'src'),
    entry: {
        app:"./app.tsx"
    },
    output: {
        publicPath : 'dist',
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json",".css",".scss"]
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'Output Management',
                favicon: './assets/favicon.ico',
                template : 'index.html',
                hash :true
            }
        ),
        new ExtractTextPlugin('styles.css'),
    ],


    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            //{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            /*{
                test:"/\.scss$/",
                use: ExtractTextPlugin.extract({
                    fallbackLoader:'style-loader',
                    use:['css-loader','sass-loader'],
                    publicPath:'/dist'
                }),
                exclude:"/node_modules/"
            },*/
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: { limit: 10000 } // Convert images < 10k to base64 strings
                }]
            }
           /* {
                test:"/\.scss$/",
                exclude:"/node_modules/",
                use: ExtractTextPlugin.extract(
                    {
                        use: 'sass-loader'
                    }
                )

            }*/
        ],
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    /*externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },*/
};

module.exports = config;

/*import * as webpack from 'webpack';
import * as path from 'path';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
declare var __dirname;

const config: webpack.Configuration = {
  entry: "./src/app",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },


    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};

export default config;*/
