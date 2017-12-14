import Vue from 'vue';

Meteor.startup(() => {

  new Vue({
      el: '#app',
      data: {
        message: 'Hello, world!'
      },
      render: (createElement) => {
        return createElement(Vue.component('layout'));
      }
  });

});
