import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import preload from './preload'
// import ipc from './ipc/front'

const ipc = require('electron').ipcRenderer

Vue.config.productionTip = false
    // import { ipcRenderer } from 'electron'
console.log(ipc);
console.log('window.preload');

Vue.prototype.$ipc = ipc

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')