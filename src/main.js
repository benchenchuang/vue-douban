// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Todos from './components/todos.vue'
import Todo from './components/todo.vue'

Vue.use(VueRouter);
Vue.use(VueResource);
//Vue.config.productionTip = false;


const routes=[
  {path:'/',name:'todos',component:Todos},
  {path:'/todo/:id',name:'todo',component:Todo}
];

const router=new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
