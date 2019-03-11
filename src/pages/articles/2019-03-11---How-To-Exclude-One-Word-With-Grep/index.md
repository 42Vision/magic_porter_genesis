---
title: How to exclude one word with grep
date: "2019-03-11 11:44:37+0800"
layout: post
draft: false
path: "/posts/how-to-exclude-one-word-with-grep---2019-03-11"
category: "TIPS"
tags:
  - "grep"
  - "Easy"
description: ""
---

## Check Date

Works on **2019-03-11 11:45:51+0800**

## Question

How to exclude one word with grep command ?

## Answer

use flag `-v`

`cat some-file | grep -v 'some-word' > result.txt`

## Reference

- [https://stackoverflow.com/questions/4538253/how-can-i-exclude-one-word-with-grep](https://stackoverflow.com/questions/4538253/how-can-i-exclude-one-word-with-grep)
