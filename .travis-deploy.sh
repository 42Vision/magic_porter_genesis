#!/bin/sh
set -e

# setup ssh-agent and provide the GitHub deploy key
eval "$(ssh-agent -s)"
openssl aes-256-cbc -K $encrypted_40b523e6865b_key -iv $encrypted_40b523e6865b_iv -in travis_rsa.enc -out travis_rsa
chmod 600 travis_rsa
ssh-add travis_rsa

yarn add global gatsby
yarn
yarn run deploy
