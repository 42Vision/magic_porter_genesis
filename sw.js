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
    "url": "webpack-runtime-b0a0ef08aa1893027bcf.js"
  },
  {
    "url": "app-b6844c8c7d348e9ff3da.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-4a19d44ac585ba363d3b.js"
  },
  {
    "url": "index.html",
    "revision": "4ea50c1bad3692fc935e9ef9af4815bc"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ca7e553577e5b9d1704bb85e53787271"
  },
  {
    "url": "styles.68e41f47aa7e6517140b.css"
  },
  {
    "url": "styles-40f8b2d744ca4b0d4fe9.js"
  },
  {
    "url": "1-25ea93df8328a70739f5.js"
  },
  {
    "url": "2-16490e6be10a09bb8c06.js"
  },
  {
    "url": "3-fad0e8d4c7d311efc305.js"
  },
  {
    "url": "component---src-pages-index-jsx-358a462e3ac57ecabaf2.js"
  },
  {
    "url": "static/d/360/path---index-6a9-Jb3TFBjud823XndY0Y0TJnrvmGc.json",
    "revision": "f3973f30cc95d0650e38e3b433a6396d"
  },
  {
    "url": "component---src-pages-404-jsx-f6d278547ef9aa2afd09.js"
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