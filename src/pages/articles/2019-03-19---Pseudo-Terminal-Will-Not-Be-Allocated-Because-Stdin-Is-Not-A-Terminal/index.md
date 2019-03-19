---
title: Pseudo Terminal Will Not Be Allocated Because Stdin Is Not A Terminal
date: "2019-03-19 14:31:24+0800"
layout: post
draft: false
path: "/posts/pseudo-terminal-will-not-be-allocated-because-stdin-is-not-a-terminal---2019-03-19"
category: "TIPS"
tags:
  - "SHELL"
  - "SSH"
description: ""
---
## Check Date

Works on **2019-03-19 14:32:49+0800** System Version **macOS 10.13.6**

## Question

How to fix "Pseudo-terminal will not be allocated because stdin is not a terminal"?

## Answer

with option `-T` from [manual](http://man.openbsd.org/ssh#T): Disable pseudo-tty allocation

## Reference

- [https://stackoverflow.com/questions/7114990/pseudo-terminal-will-not-be-allocated-because-stdin-is-not-a-terminal](https://stackoverflow.com/questions/7114990/pseudo-terminal-will-not-be-allocated-because-stdin-is-not-a-terminal)
