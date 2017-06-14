#!/bin/bash

rm -rf build
rm -rf dist

node ../node_modules/.bin/webpack --config webpack.config.js