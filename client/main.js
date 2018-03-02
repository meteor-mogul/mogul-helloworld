import { Meteor } from 'meteor/meteor';
import { Vue } from 'meteor/meteormogul:vue-dist';
import Vuetify from 'vuetify';
import 'meteor/zodiase:material-design-icons-fonts';

Vue.use(Vuetify);

vm = new Vue({
    el: '#app',
    template: '#app-template',
    data: {
      message: 'Hello, world!'
    }
});
