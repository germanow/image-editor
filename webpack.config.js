const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: "./src/App.jsx",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};