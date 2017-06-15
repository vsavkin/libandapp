# Lib and App

This repository illustrates how to structure a project that has two parts:

* lib - a library of components and services
* app - an application consuming lib

## Lib

The library is built using rollup. The artifacts are:

- lib/dist/mylib.js (FESM bundle, a single ES module containing all the code of the library compile to ES5)
- lib/dist/mylib.metadata.json (all the metadata flattened into a single json file. Needed by Angular)
- lib/dist/mylib.d.ts + other d.ts files (declaration files for all the files in the library. It would be great to hae a sinle one, but Typescript doesn't provide a good way to do it)

Note:
- You don't have to use rollup, but it does the job.
- The compiled bundle doesn't contain Angular. It only contain its own code.

## App

The app is built using webpack. The artifacts are:

- app/dist/bundle.js (a UMD bundle)

Note:

- We don't need to generate a dts file here because nobody depend on the application
- Webpack resolves all the dependencies, bundles everything together, and does treeshaking. The treeshaking works because we use the FESM format.


## See it in action

* Run `npm install`
* Go to lib and run `./build.sh`
* Go to app and run `./build.sh`
* Go to app Run `http-server .`
* Open `localhost:8080`