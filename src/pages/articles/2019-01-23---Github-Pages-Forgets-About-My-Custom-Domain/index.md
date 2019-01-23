---
title: Github Pages Forgets About My Custom Domain
date: "2019-01-23 12:29:04+0800"
layout: post
draft: false
path: "/posts/github-pages-forgets-about-my-custom-domain---2019-01-23"
category: "GitHub"
tags:
  - "Easy"
  - "GitHub-Pages"
  - "Domain"
description: ""
---

## Check Date

Works on **2019-01-23 12:22:57+0800**

## Question

Github forgets about my custom domain every time I update the website. It resets to the default xxx.github.io URL every time I update the site

## Answer

`echo "your.domain" > your-github-page-folder/CNAME` before push the content of your-github-page-folder to gh-pages branch

## Reference

- [https://github.community/t5/GitHub-Pages/Github-forgets-about-my-custom-domain-every-time-I-update-the/td-p/470](https://github.community/t5/GitHub-Pages/Github-forgets-about-my-custom-domain-every-time-I-update-the/td-p/470)
