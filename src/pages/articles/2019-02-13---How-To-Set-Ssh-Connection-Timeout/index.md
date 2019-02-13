---
title: How To Set SSH Connection Timeout
date: "2019-02-13 13:54:26+0800"
layout: post
draft: false
path: "/posts/how-to-set-ssh-connection-timeout---2019-02-13"
category: "TIPS"
tags:
  - "SSH"
description: ""
---

## Check Date

Works on **2019-02-13 13:55:14+0800**

## Question

How To Set SSH Connection Timeout ?

## Answer

`ssh -o ConnectTimeout=600 username@serverhost` (600 seconds)

## Reference

- [https://www.digitalocean.com/community/questions/how-to-increase-ssh-connection-timeout](https://www.digitalocean.com/community/questions/how-to-increase-ssh-connection-timeout)

