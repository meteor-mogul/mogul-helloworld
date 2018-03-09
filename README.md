# mogul-helloworld

## What

A very simple example Meteor app using Vue as the front end.

This is the master branch, which uses meteormogul Atmosphere packages for vue and vuetify.

## Why

Use this app to test your toolchain, i.e. make sure you have meteor and your development environment installed correctly.

## How

You can run it:

```
$ git clone https://github.com/meteor-mogul/mogul-helloworld.git
$ cd mogul-helloworld
$ meteor npm install
$ meteor
```

Note: If you are upgrading from an earlier version of `meteor` to `meteor 1.6.1` you may need to run the following command:

```
$ meteor npm install --save @babel/runtime
```

## Branches

The `master` branch uses the `meteormogul:vue-dist` Atmosphere package of vue.js and the `meteormogul:vuetify-dist` Atmosphere package of vuetify.js.

The `npm` branch uses NPM packages.

## Demo

[https://meteor-mogul-hello-world.herokuapp.com/](https://meteor-mogul-hello-world.herokuapp.com/)
