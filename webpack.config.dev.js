var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/index.jsx' // Your appʼs entry point
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.less$/,
            loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less"
        }, {
            test: /\.(png|jpg|svg)$/,
            loader: "url?limit=25000"
        }]
    },
    output: {
        path: __dirname,
        filename: 'index.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
