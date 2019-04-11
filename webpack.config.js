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
                test: /\.js/,
                exclude: /(node_modules)|(dist)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        //presets: ['env']
                    }
                }
            }
        ]
    }
};