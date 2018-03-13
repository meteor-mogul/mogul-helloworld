import { Meteor } from 'meteor/meteor';
import { Vue } from 'meteor/meteormogul:vue-dist';
import { Vuetify } from 'meteor/meteormogul:vuetify-dist';
import { VueRouter } from 'meteor/meteormogul:vue-router-dist';

Vue.use(Vuetify);
Vue.use(VueRouter);

const Happy = { template: '<v-icon>mood</v-icon>'};
const Sad = { template: '<v-icon>mood_bad</v-icon>'};

const routes = [
  { path: '/happy', component: Happy },
  { path: '/sad', component: Sad }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

vm = new Vue({
    router,
    template: '#app-template',
    data: {
      message: 'Hello, world!'
    }
}).$mount('#app');
