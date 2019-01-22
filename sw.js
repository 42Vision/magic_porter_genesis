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
    "url": "webpack-runtime-86201b4a7d3ae9412d5c.js"
  },
  {
    "url": "app-26939afbaf5f90f65fa7.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c6e0b58e1edc74732ff3.js"
  },
  {
    "url": "index.html",
    "revision": "c76ac1452bf07492967156f166ec0ff7"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5d1e817b12514eaa3e3624fccd9578b3"
  },
  {
    "url": "component---src-pages-index-jsx.69a945a11e23dfafac91.css"
  },
  {
    "url": "2.5bb4825c1a314648bdfd.css"
  },
  {
    "url": "0-95207b92795bd4570cbe.js"
  },
  {
    "url": "1-fd25aab77ee4a3c70515.js"
  },
  {
    "url": "3-a39d1bfd887f2fd9ff42.js"
  },
  {
    "url": "2-96238286c0d509eea260.js"
  },
  {
    "url": "component---src-pages-index-jsx-69ba86748d6367f831c0.js"
  },
  {
    "url": "static/d/260/path---index-6a9-am5gUpuHSHCXU2XSVsQWXCSgFGk.json",
    "revision": "a54f8c6ffe9f398ab3cfcd0b5f8f8ffd"
  },
  {
    "url": "component---src-pages-404-jsx-091090ade2818b9135ac.js"
  },
  {
    "url": "static/d/616/path---404-html-516-62a-UDKbGwePtrTBmuOunOiTJry5CI.json",
    "revision": "be5d9e9d0c4dc47dd493f4f2753c14ef"
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