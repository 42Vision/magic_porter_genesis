---
title: No Toolchains Found In The Ndk Toolchains Folder
date: "2019-01-28 13:33:26+0800"
layout: post
draft: false
path: "/posts/no-toolchains-found-in-the-ndk-toolchains-folder---2019-01-28"
category: "Tips"
tags:
  - "Flutter" "Android"
description: ""

---

## Check Date

Works on **2019-01-28 13:28:21+0800**

## Question

No toolchains found in the NDK toolchains folder for ABI with prefix: mips64el-linux-android

## Answer

Open `android/gradle/gradle-wrapper.properties` and change this line:
`distributionUrl=https\://services.gradle.org/distributions/gradle-4.1-all.zip`

to this line:

`distributionUrl=https\://services.gradle.org/distributions/gradle-4.4-all.zip`

Open `android/build.gradle` and change this line:

`classpath 'com.android.tools.build:gradle:3.0.1'`

to this:

`classpath 'com.android.tools.build:gradle:3.1.2'`

## Reference

- [https://github.com/flutter/flutter/issues/22031](https://github.com/flutter/flutter/issues/22031)
