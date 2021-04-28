const {resolve} = require("path");

module.exports = {

    entry: {
        eQuery: "./src/main.js"
    },

    output: {
        path: resolve(__dirname + "/../js/"),
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ["transform-runtime"],
                        presets: ["es2015"]
                    }
                }
            }
        ]
    }

};