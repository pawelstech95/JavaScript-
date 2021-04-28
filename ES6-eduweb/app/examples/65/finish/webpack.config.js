const { resolve } = require("path");

module.exports = {

    entry: "./src/js/scripts.js",

    output: {
        path: resolve(__dirname + "/dist/js/"),
        filename: "bundle.js"
    }

};