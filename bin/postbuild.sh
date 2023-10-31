#!/bin/bash

rm -rf ./.amplify-hosting

node esbuild.config.js
cp -r ./dist ./.amplify-hosting/static

if [[ -z "${DEPLOY_MANIFEST_OVERRIDE}" ]]; then
  cp ./deploy-manifest.json ./.amplify-hosting/deploy-manifest.json
fi
