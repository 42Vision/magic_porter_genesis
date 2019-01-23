---
title: Rsync Creates A Directory With The Same Name Inside Of Destination Directory
date: "2019-01-22 11:05:30+0800"
layout: post
draft: false
path: "/posts/rsync-creates-a-directory-with-the-same-name-inside-of-destination-directory---2019-01-22"
category: ""
tags:
  - "UNIX"
  - "Command"
  - "rsync"
description: ""
---

## Check Date

Works on **2018-01-22 19:11:49 +0800**

## Question

Rsync creates one more directory "tests" inside of existing "tests"

## Answer

If you don't want another tests directory created, the correct command would be

rsync -avzp --del -e "ssh -p myport" user@hostname:/var/www/tests/ /var/www/tests
Note the / at the end of user@hostname:/var/www/tests/.

## Reference

- [https://serverfault.com/questions/529287/rsync-creates-a-directory-with-the-same-name-inside-of-destination-directory](https://serverfault.com/questions/529287/rsync-creates-a-directory-with-the-same-name-inside-of-destination-directory)
