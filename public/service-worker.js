importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-switch.js");

workbox.routing.registerRoute(
    /\.(?css|js)$/,
    new workbox.strategies.StaleWhileRevalidate({
        "cacheName": "assets",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 1000,
                maxAgeSeconds: 31536000
            })
        ]
    })
);

workbox.routing.registerRoute(
    /\.(?png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        "cacheName": "images",
        plugins: [
            new workbox.exipiration.Plugin({
                maxEntries: 1000,
                maxAgeSeconds: 31536000
            })
        ]
    })
);