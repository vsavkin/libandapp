#!/bin/bash

rm -rf dist
rm -rf build

node ../node_modules/.bin/ngc -p tsconfig.json

cp -r build/src dist
rsync -a --exclude '*.ts' ./src/ ./dist/