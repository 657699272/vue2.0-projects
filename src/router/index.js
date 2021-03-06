import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '',
        redirect: '/homePage'
    },
    {
        path: '/homePage',
        name: 'homePage',
        component:  () => import('../views/homePage.vue')
      },
  {
    path: '/uiComponents',
    name: 'uiComponents',
    component:  () => import('../views/uiComponents.vue')
  },
  {
    path: '/axiosTest',
    name: 'axiosTest',
    component: () => import('../views/axiosTest.vue')
  },
  {
    path: '/compositionApi',
    name: 'compositionApi',
    component: () => import('../views/compositionApi.vue')
  },
  {
    path: '/vueTs',
    name: 'typescript',
    component: () => import('../views/vueTs.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
