---
title: Start Supervisor But Get Unlink Error
date: "2019-01-30 11:38:11+0800"
layout: post
draft: false
path: "/posts/start-supervisor-but-get-unlink-error---2019-01-30"
category: "Tips"
tags:
  - "Supervisor"
description: ""
---

## Check Date

Works on **2019-01-30 11:38:46+0800**

## Question

Stopping supervisord: Shut down

## Answer

`sudo unlink /tmp/supervisor.sock`

This .sock file is defined in /etc/supervisord.conf's [unix\_http\_server]'s file config value (default is /tmp/supervisor.sock)

Use `find / -name supervisor.sock` to find your `.sock` file

## Reference

- [https://stackoverflow.com/questions/14479894/stopping-supervisord-shut-down](https://stackoverflow.com/questions/14479894/stopping-supervisord-shut-down)

