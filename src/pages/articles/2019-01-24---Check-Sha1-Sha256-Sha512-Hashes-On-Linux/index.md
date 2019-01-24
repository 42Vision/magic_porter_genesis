---
title: Check Sha1 Sha256 Sha512 Hashes On Linux
date: "2019-01-24 12:21:16+0800"
layout: post
draft: false
path: "/posts/check-sha1-sha256-sha512-hashes-on-linux---2019-01-24"
category: ""
tags:
  - "Hash"
  - "Linux"
  - "Easy"
description: ""
---

## Check Date

Works on **2019-01-24 12:23:24+0800**

## Question

How to Check SHA1, SHA256 and SHA512 Hashes on Linux

## Answer

SHA1 hashes [160bit]

`sha1sum file-name`

SHA256 hashes

`sha256 file-name`

SHA512 hashes

`sha512sum file-name`

### check hash file

put your target file and the hash file in the same folder, and run 

`sha1sum -c`

see `man sha1sum` to learn more.

## Reference

- [https://www.maketecheasier.com/check-sha1-sha256-sha512-hashes-on-linux/](https://www.maketecheasier.com/check-sha1-sha256-sha512-hashes-on-linux/)
