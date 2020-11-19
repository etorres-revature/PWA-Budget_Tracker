const path = require('path');

/**
 * Webpack Config
 * @see https://webpack.js.org/concepts/configuration/
 */
const config = {
    entry: "./public/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "development",
};

module.exports = config;