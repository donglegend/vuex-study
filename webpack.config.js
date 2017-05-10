var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', "stage-2"]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".vue", ".css"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: "vuex-study"
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         drop_console: false,
        //     }
        // })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        inline: true,
        port: 9000
    }
}