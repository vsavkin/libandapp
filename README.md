# Lib and App

This repository illustrates how to structure a project that has three parts:

* namespacelib - a legacy library using typescript namespaces
* lib - a library of components and services
* app - an application consuming lib



## NamepaceLib

The library has three entities:

- StringConst - a value
- StringTransformer - a type
- StringTransformerImpl - a class, which is both a value and a type

The library is built using typescript and compiled to UMD. It's directly included onto the page.

The result is put into the dist folder:

- index.js
- index.d.t.s


## Lib

The library is build using NGC. The result is put into the dist folder and has *.js, *.d.ts, and *.metadata.json files.

Note that we are free to use namespacelib here. We can use its value inside the LibComponent class. We can use the Namespacelib.StringTransformer type as well. What we cannot do is to directly reference a value from the namespacelib inside NgModule and Component decorators. This is almost never needed (legacy angularjs libraries use strings to configure DI), so it should not be a problem. When it is needed, there is an easy workaround (use `toFactory`). Another thing we cannot do is to use the `impor X = MyNamespace.X` syntax.




## App

The app is built using webpack.

The result bundle is includ

- app/dist/bundle.js (a UMD bundle)

Note:

- We don't need to generate a dts file here because nobody depend on the application
- Webpack resolves all the dependencies, bundles everything together, and does treeshaking. The treeshaking works because we use the FESM format.


## See it in action

* Run `npm install`
* Run `build.sh`