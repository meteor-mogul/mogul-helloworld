import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  new Vue({
      el: '#app',
      data: {
        message: 'Hello, world!'
      }
  });

});
