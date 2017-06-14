#!/bin/bash

rm -rf dist
rm -rf build

node ../node_modules/.bin/ngc -p tsconfig.json
node ../node_modules/.bin/rollup build/mylib.js -o dist/mylib.js

rsync -a --exclude=*.js build/ dist