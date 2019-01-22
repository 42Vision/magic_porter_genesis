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
    "url": "webpack-runtime-429046afd880753109d9.js"
  },
  {
    "url": "app-421a5a97302526f10b08.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c6e0b58e1edc74732ff3.js"
  },
  {
    "url": "index.html",
    "revision": "2bcd8fc8034a51441d963b39bb42c941"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5d47104621fc2c5eb815b352758bb16e"
  },
  {
    "url": "component---src-pages-index-jsx.69a945a11e23dfafac91.css"
  },
  {
    "url": "2.5bb4825c1a314648bdfd.css"
  },
  {
    "url": "0-d20742654d5d58d17579.js"
  },
  {
    "url": "1-cc8c33567366d6bda82a.js"
  },
  {
    "url": "3-84581fdae50df720d31f.js"
  },
  {
    "url": "2-fd7ac73629050c4230b3.js"
  },
  {
    "url": "component---src-pages-index-jsx-09c075e1fdd6713c542b.js"
  },
  {
    "url": "static/d/710/path---index-6a9-dChT282Iv1nHYADxyx1joX69M8.json",
    "revision": "6ce5e310dcb0daea8f9dfbc7227ff113"
  },
  {
    "url": "component---src-pages-404-jsx-e39da3063ff17b8243a2.js"
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