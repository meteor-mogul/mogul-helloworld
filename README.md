# mogul-helloworld

## What

A very simple example Meteor app showing how to use

- VueJS
- Vuetify
- Material Design Icon Fonts
- Vue Router

This is the `master` branch, which uses [meteormogul Atmosphere packages](https://atmospherejs.com/meteormogul/).  The `npm` branch uses [NPM packages](https://www.npmjs.com/).

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

The `master` branch uses these Atmosphere packages:

- `meteormogul:vue-dist` for vue.js
- `meteormogul:vuetify-dist` for vuetify.js
- `meteormogul:material-design-icons-fonts` for iconfont/MaterialIcons-Regular
- `meteormogul:vue-router-dist` for vue-router.js

The `npm` branch uses NPM packages.

## Demo

[https://meteor-mogul-hello-world.herokuapp.com/](https://meteor-mogul-hello-world.herokuapp.com/)
