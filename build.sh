#!/bin/bash

echo "Building namespace lib"
cd namespacelib
./build.sh
cd ../

echo "Building lib"
cd lib
./build.sh
cd ../

echo "Building app"
cd app
./build.sh
cd ../