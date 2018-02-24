import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// application routes
import register from '@/views/register'
import login from '@/views/login'
import protectedPage from '@/views/protected'

const routes = [
  { path: '/', name: 'login', component: login },
  { path: '/register', name: 'register', component: register },
  { path: '/protected', name: 'protected', component: protectedPage }
]

// export router instance
let router = new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})

export default router
