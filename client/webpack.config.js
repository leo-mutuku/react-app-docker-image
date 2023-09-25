const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    Plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-reset']
                    }
                }
            }
        ]
    }
}