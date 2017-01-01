import Vue from 'vue'
import Router from 'vue-router'
import { routes as app } from '../app'

Vue.use(Router)

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator
const routes = [...app]

Vue.use(Router)

const router = new Router({
    routes,
    hashbang: false,
    mode : 'history',
    linkActiveClass: 'active'
})

export default router