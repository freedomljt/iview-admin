import Vue from 'vue';
import VueRouter from 'vue-router';
import LayoutMain from '@/components/LayoutMain.vue';
import Order from '@/views/order/index.vue';
import Demo from '@/views/demo/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '首页',
    component: LayoutMain,
    children: [
      {
        path: 'order',
        name: '订单管理',
        component: Order,
        children: [
          {
            path: 'abc',
            name: 'abc',
            component: Order,
          },
        ],
      },
      {
        path: 'demo',
        name: 'demo',
        component: Demo,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
