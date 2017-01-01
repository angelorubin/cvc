/**
 * The Vue build version to load with the `import` command
 * (runtime-only or standalone) has been set in webpack.base.conf 
 * with an alias.
 */
import Vue from 'vue'
import Root from './Root'
import routes from './app'
import router from './router'

new Vue({
	el : '#app',
    router,
    render: h => h(Root)
})
