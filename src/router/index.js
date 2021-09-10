import Login from '../views/login/index.vue'
import Home from '../views/Home/index.vue'
import { Notify } from 'vant';
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: '/', component: Home, meta: { title: '首页' } },
  { path: '/login', component: Login, meta: { title: '注册登录' } },
]
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
router.beforeEach((to, form, next) => {
  const token = window.localStorage.getItem('token')
  // const token = sessionStorage.getItem('isLogin')
  if (to.path === '/login') {
    token ? next('/') : next()
  } else {
    token ? next() : next('/login?redirect=' + to.path)
  }
})
export default router