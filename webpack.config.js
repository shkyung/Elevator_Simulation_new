const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)|(dist)/,
                use: {
                    loader: 'babel-loader'
                    // options: {
                    //     "presets": ["babel-preset-env", "babel-preset-es2015"]
                    // }
                }
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};