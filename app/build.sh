#!/bin/bash

rm -rf build
rm -rf dist
rm -rf deps

mkdir deps
cp -r ../lib/dist deps/mylib

node ../node_modules/.bin/webpack -p --config webpack.config.js

# ../node_modules/.bin/ngc -p tsconfig.json