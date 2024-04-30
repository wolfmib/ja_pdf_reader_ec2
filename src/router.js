import Vue from 'vue';
import VueRouter from 'vue-router';
//import { createRouter, createWebHistory } from 'vue-router';

//import HelloWorld from '@/components/HelloWorld';
import ComponentOne from '@/components/ComponentOne';
import ComponentTwo from '@/components/ComponentTwo';


Vue.use(VueRouter);

const routes = [
  {
    path: '/one',
    component: ComponentOne,
  },
  {
    path: '/two',
    component: ComponentTwo,
  },


];

const router = new VueRouter({
  routes,
});

export default router;
