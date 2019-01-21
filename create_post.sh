#! /bin/bash

set -x

ARTICLES_ROOT='src/pages/articles'
TITLE=$@
TITLE=${TITLE// /-}
DATE=$(date +'%Y-%m-%d')
ISO_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
ARTICLES_DIR=$DATE"---"${TITLE}
ARTICLES_DIR=$(python -c 'print("'$ARTICLES_DIR'".title())')
POST_PATH=$(python -c 'print("'$ARTICLES_DIR'".lower())')
TITLE=$(python -c 'print("'$TITLE'".title())')
TARGET=$ARTICLES_ROOT"/"$ARTICLES_DIR
POST=$TARGET"/index.md"
if [[ ! -e $TARGET ]]; then
    mkdir -p $TARGET
    touch $POST
    tee $POST <<EOF >/dev/null
---
title: ${TITLE}
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
