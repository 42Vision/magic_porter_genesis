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
    "url": "webpack-runtime-821f5a23a1870ae0d06e.js"
  },
  {
    "url": "app-f94c8f1c866c632d020d.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c6e0b58e1edc74732ff3.js"
  },
  {
    "url": "index.html",
    "revision": "0fa1349c71fb6f3a55b782d9887ca522"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8350d187a848b5ea6befa2266007202d"
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
    "url": "1-a8fe7a0e8b3b860fb3e4.js"
  },
  {
    "url": "3-a2b633116da1f4ab9fb3.js"
  },
  {
    "url": "2-f5e9ef55a778e28cf610.js"
  },
  {
    "url": "component---src-pages-index-jsx-9da5cce4889443af63a7.js"
  },
  {
    "url": "static/d/570/path---index-6a9-0wwCe7WZqNI5riy6yquSEo1iD3A.json",
    "revision": "2ba4f07a1f26895ea944dd9a7fe1988e"
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