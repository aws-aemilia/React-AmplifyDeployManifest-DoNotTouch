#!/bin/bash

rm -rf ./.amplify-hosting

node esbuild.config.js
cp -r ./dist ./.amplify-hosting/static
cp ./deploy-manifest.json ./.amplify-hosting/deploy-manifest.json
