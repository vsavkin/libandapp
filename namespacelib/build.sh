#!/bin/bash

rm -rf dist
rm -rf build

../node_modules/.bin/tsc -p tsconfig.json

cp -r build/src dist