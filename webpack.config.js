const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],
    devServer: {
        contentBase: "build",
        inline: true,
        port: 9999,
    }
};