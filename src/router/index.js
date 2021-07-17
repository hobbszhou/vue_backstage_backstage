import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/User.vue'
import Rights from '../components/Rights.vue'
import Role from '../components/Role.vue'
import Cate from '../components/Cate.vue'
import Params from '../components/Params11.vue'
import GoodsList from '../components/List.vue'
import GoodsAdd from '../components/Add.vue'
import Order from '../components/Order.vue'
import Report from '../components/Report.vue'
Vue.use(Router)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new Router({
//   routes: [

//   ]
// })

// export default router
// export default new Router({
//   routes: [
//     { path: '/', redirect: '/login' },
//     { path: '/login', component: Login },
//     {
//       path: '/home',
//       component: Home,
//       redirect: '/welcome',
//       children: [{ path: 'welcome', component: Welcome }]
//     }
//   ]
// })
const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users },
        { path: '/rights', component: Rights },
        { path: '/roles', component: Role },
        { path: '/categories', component: Cate },
        { path: '/params', component: Params },
        { path: '/goods', component: GoodsList },
        { path: '/goods/add', component: GoodsAdd },
        { path: '/orders', component: Order },
        { path: '/reports', component: Report }
      ]
    }
  ]
})
// 挂载路由守卫，发送请求之前都会经过守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转过来
  // next是放一个函数，表示放行
  //   next()  放行， next("/login") 强制进行跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // 如果没有token则跳跳到/login路由
  if (!tokenStr) return next('/login')
  // 否则路由放行
  next()
})
export default router
