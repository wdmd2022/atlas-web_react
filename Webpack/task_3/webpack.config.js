const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        static: path.join(__dirname, 'public'),
        port: 8564,
        open: true
    },
    entry: './js/dashboard_main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
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
    }
};
