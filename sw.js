/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-4d1b615e2108e5591635.js"
  },
  {
    "url": "app-a4faa9257e0c3ab14d2b.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-69f01a0ba2f036e06a79.js"
  },
  {
    "url": "index.html",
    "revision": "ec33f8cb5db5a1ce931ee774da4b6a9b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0ef9d251112052a4f880f7ccfd31cd47"
  },
  {
    "url": "styles.6fcf0f220ee9abb25277.css"
  },
  {
    "url": "styles-4d2b445d5c54017fc16c.js"
  },
  {
    "url": "1-6c14edeed158ce024738.js"
  },
  {
    "url": "2-de58c7ae59f91fa46a19.js"
  },
  {
    "url": "3-c2f16c73fb1456308c41.js"
  },
  {
    "url": "component---src-pages-index-jsx-8e07716eae4cac6437b1.js"
  },
  {
    "url": "static/d/365/path---index-6a9-h7ht56bCF54kMHfjmslSsX4Pw.json",
    "revision": "bc8175aaba66ee10785c8d46abe2520e"
  },
  {
    "url": "component---src-pages-404-jsx-f0f5232669bb39007410.js"
  },
  {
    "url": "static/d/558/path---404-html-516-62a-j18MDguMrRSsb5EFevfD74vE1dE.json",
    "revision": "0ca4698a97698dbc0601e1bd4112f5f4"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});