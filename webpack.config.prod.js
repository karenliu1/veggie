var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
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
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ],
    output: {
        path: __dirname,
        filename: 'index.js'
    }
}
