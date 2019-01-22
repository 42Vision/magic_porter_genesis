---
title: Rsync-Creates-A-Directory-With-The-Same-Name-Inside-Of-Destination-Directory
date: "2019-01-22T11:05:30Z"
layout: post
draft: false
path: "/posts/2019-01-22---rsync-creates-a-directory-with-the-same-name-inside-of-destination-directory"
category: ""
tags:
  - "UNIX"
  - "Command"
  - "rsync"
description: ""
---

Question:
Rsync creates one more directory "tests" inside of existing "tests"


Answer:
If you don't want another tests directory created, the correct command would be

rsync -avzp --del -e "ssh -p myport" user@hostname:/var/www/tests/ /var/www/tests
Note the / at the end of user@hostname:/var/www/tests/.

Works on **2019-01-22T19:11:49 +0800**

[Original Link](https://serverfault.com/questions/529287/rsync-creates-a-directory-with-the-same-name-inside-of-destination-directory)
