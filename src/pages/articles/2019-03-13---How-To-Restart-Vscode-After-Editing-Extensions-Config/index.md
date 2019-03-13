---
title: How To Restart Vscode After Editing Extensions Config
date: "2019-03-13 18:54:16+0800"
layout: post
draft: false
path: "/posts/how-to-restart-vscode-after-editing-extensions-config---2019-03-13"
category: "TIPS"
tags:
  - "VSCode"
description: ""
---
## Check Date

Works on **2019-03-13 18:54:51+0800**

## Question

How to restart vscode after editing extensions config ?

## Answer

vscode command: `workbench.action.reloadWindow`

- `Ctrl + Shift + P` type in: Reload Window 

- Define a keybinding for the command

    keybindings.json

        {
          "key": "ctrl+f5",
          "command": "workbench.action.reloadWindow",
          "when": "editorTextFocus"
        }
    
    Preferences > Keyboard Shortcuts


## Reference

- [https://stackoverflow.com/questions/42002852/how-to-restart-vscode-after-editing-extensions-config](https://stackoverflow.com/questions/42002852/how-to-restart-vscode-after-editing-extensions-config)
