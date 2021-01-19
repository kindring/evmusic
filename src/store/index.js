import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/globle'
import songlist from './songlist/index'

Vue.use(Vuex)
let store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        global,
        songlist
    }
})
export default store;