const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 8564,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(?:ico|gif|png|jpeg|jpg)$/i,
                use: [
                    'file-loader',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
}
