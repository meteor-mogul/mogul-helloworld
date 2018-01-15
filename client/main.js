import { Meteor } from 'meteor/meteor';
import Vue from 'vue/dist/vue.js';

Meteor.startup(() => {

  new Vue({
      el: '#app',
      data: {
        message: 'Hello, world!'
      }
  });

});
