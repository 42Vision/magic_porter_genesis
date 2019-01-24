#!/bin/sh
set -e

# setup ssh-agent and provide the GitHub deploy key
eval "$(ssh-agent -s)"
openssl aes-256-cbc -K $encrypted_40b523e6865b_key -iv $encrypted_40b523e6865b_iv -in travis_rsa.enc -out travis_rsa -d
# openssl aes-256-cbc -K $encrypted_40b523e6865b_key -iv $encrypted_40b523e6865b_iv -in travis_rsa.enc | ssh-add -
chmod 600 travis_rsa
# ssh-add travis_rsa
cp travis_rsa ~/.ssh/id_rsa

yarn config set registry https://registry.yarnpkg.com
yarn add global gatsby
yarn
yarn run deployci
# ssh -vvvT git@github.com
echo 'magicporter.com' > public/CNAME
./node_modules/.bin/gh-pages -d public -b gh-pages -r git@github.com:${TRAVIS_REPO_SLUG}.git
