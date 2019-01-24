#! /bin/bash

set -x

ARTICLES_ROOT='src/pages/articles'
INPUT_TITLE=$@
TITLE=${INPUT_TITLE// /-}
DATE=$(date +'%Y-%m-%d')
ISO_DATE=$(date +"%Y-%m-%d %H:%M:%S%z")
ARTICLES_DIR=$DATE"---"${TITLE}
ARTICLE_PATH=$TITLE"---"$DATE
ARTICLES_DIR=$(python -c 'print("'$ARTICLES_DIR'".title())')
POST_PATH=$(python -c 'print("'$ARTICLE_PATH'".lower())')
TITLE=$(python -c 'print("'$TITLE'".title())')
ARTICLE_TITLE=${TITLE//-/ }
TARGET=$ARTICLES_ROOT"/"$ARTICLES_DIR
POST=$TARGET"/index.md"
if [[ ! -e $TARGET ]]; then
    mkdir -p $TARGET
    touch $POST
    tee $POST <<EOF >/dev/null
---
title: ${ARTICLE_TITLE}
date: "${ISO_DATE}"
layout: post
draft: false
path: "/posts/${POST_PATH}"
category: ""
tags:
  - ""
  - ""
description: ""
---

EOF
fi
# vim $POST
