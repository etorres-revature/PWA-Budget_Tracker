const path = require('path');

/**
 * Webpack Config
 * @see https://webpack.js.org/concepts/configuration/
 */
const config = {
    entry: "./public/js/index.js",
    output: {
        path: path.resolve(__dirname, "/public/dist"),
        filename: "bundle.js"
    },
    mode: "development",
    plugins: {
        new WebpackPwaManifest({
            publicPath: "/dist/",
            filename: "manifest.json",
            inject: false,
            name: "Progressive Web Application Budget Tracker",
            short_name: "PWA Budget Tracker App",
            theme_color: "#ffffff",
            background_color: "#ffffff",
            start_url: "/",
            display: "standalone",
            icons: [
                {
                    src: path.resolve(__dirname, "public/icons/icon-512x512.png"), 
                    size: [72, 96, 128, 144, 152, 192, 384, 512]
                }
            ]
        })
    }
};

module.exports = config;