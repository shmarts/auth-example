import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// application routes
import index from '@/views/index'
const routes = [
  { path: '/', name: 'index', component: index }
]

// export router instance
let router = new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})

export default router
