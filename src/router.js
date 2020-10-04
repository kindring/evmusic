import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from 'components/views/index'

export default new Router({
    routers: [{
            path: '/',
            name: 'Home',
            components: home
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})