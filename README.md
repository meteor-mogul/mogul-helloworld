# mogul-helloworld

## What

A very simple example Meteor app using Vue as the front end.

This is the npm branch of this app.

## Why

Use this app to test your toolchain, i.e. make sure you have meteor and your development environment installed correctly.

Use this app to get dist code from npm packages that can be used to build meteormogul Atmosphere packages without having to build the npm packages first.

The npm branch uses npm packages for the following:

- vue
- vue-meteor-tracker
- vuetify

The master branch uses meteormogul Atmosphere packages for the following:

- vue
- vuetify

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

The `master` branch uses the `meteormogul:vue-dist` Atmosphere package of vue.js.

The `npm` branch uses the NPM package.

## Demo

[https://meteor-mogul-hello-world.herokuapp.com/](https://meteor-mogul-hello-world.herokuapp.com/)
