const path = require('path');
const {merge} = require('webpack-merge');
const webpackConfig = request('./webpack.config');

module.exports = merge(webpackConfig,{
    mode:"production",
    output: {
        path:path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    }
});