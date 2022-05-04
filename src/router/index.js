/*
 * @Author: windyGu
 * @Date: 2022-05-01 23:14:15
 * @LastEditors: windyGu
 * @LastEditTime: 2022-05-04 22:07:42
 * @FilePath: \nb_blog_web\src\router\index.js
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import(/* webpackChunkName: "login" */ '../views/home/home.vue')
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
