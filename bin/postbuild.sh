#!/bin/bash

BUILD_OUTPUT_DIR="${BUILD_OUTPUT_DIR:-.amplify-hosting}"

rm -rf ./${BUILD_OUTPUT_DIR}

node esbuild.config.js
cp -r ./dist ./${BUILD_OUTPUT_DIR}/static

if [[ -z "${DEPLOY_MANIFEST_OVERRIDE}" ]]; then
  cp ./deploy-manifest.json ./${BUILD_OUTPUT_DIR}/deploy-manifest.json
fi
