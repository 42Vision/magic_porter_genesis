---
title: How To Use Multi Line String In Shell
date: "2019-03-19 15:09:33+0800"
layout: post
draft: false
path: "/posts/how-to-use-multi-line-string-in-shell---2019-03-19"
category: "TIPS"
tags:
  - "Shell"
  - "macOS"
description: ""
---
## Check Date

Works on **2019-03-19 15:10:28+0800** System Version **macOS 10.13.6**

## Question

How to use Multi-line string in Shell ?

## Answer

  cat << EndOfMessage
  This is line 1.
  This is line 2.
  Line 3.
  EndOfMessage

The string after '<<' indicates where to stop.

## Reference

- [https://stackoverflow.com/questions/23929235/multi-line-string-with-extra-space-preserved-indentation](https://stackoverflow.com/questions/23929235/multi-line-string-with-extra-space-preserved-indentation)
