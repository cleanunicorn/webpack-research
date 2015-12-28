var webpack = require("webpack");

module.exports = {
    debug: 'eval',
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    entry: './js/main.js',
    output: {
        path: 'dist/',
        filename: './js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(png|jpeg|jpg|gif|svg)$/i, loaders:
                [
                    'url-loader'
                ]
            },
            { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" }
        ]
    }
};
