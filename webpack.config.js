const path = require("path");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const Workbox = require("workbox-webpack-plugin");

/**
 * Webpack Config
 * @see https://webpack.js.org/concepts/configuration/
 */
const config = {
  entry: "./public/js/index.js",
  output: {
    path: path.resolve(__dirname, "/public/dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      publicPath: "/dist/",
      filename: "manifest.webmanifest.json",
      inject: false,
      name: "Progressive Web Application Budget Tracker",
      short_name: "PWA Budget Tracker",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      start_url: "/",
      display: "standalone",
      icons: [
        {
          src: path.resolve(__dirname, "public/icons/icon-512x512.png"),
          size: [72, 96, 128, 144, 152, 192, 384, 512],
        },
      ],
    }),
    new Workbox.GenerateSW({
      swDest: "./public/dist/service-worker.js",
      runtimeCaching: [
        {
          urlPattern: "/.(?:html|htm|xml)$/",
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "markup",
            expiration: {
              maxAgeSeconds: 60 * 60 * 24 * 7,
            },
          },
        },
      ],
    }),
  ],
};

module.exports = config;
