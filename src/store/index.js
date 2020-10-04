import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/globle'

Vue.use(Vuex)
let store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        global
    }
})
export default store;