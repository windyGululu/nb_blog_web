/*
 * @Author: windyGu
 * @Date: 2022-03-05 00:24:06
 * @LastEditors: windyGu
 * @LastEditTime: 2022-03-05 00:28:57
 * @FilePath: \nb_blog\web-client\src\store\index.js
 * @Description: 
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as getters from './getters'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations,
  getters,
})
