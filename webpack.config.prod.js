const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    devtool: 'source_map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
        publicPath: '/public/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'API_HOST': JSON.stringify('https://react-flask-stage.herokuapp.com')
            }
        })
    ]
}