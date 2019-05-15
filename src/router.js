import Vue from 'vue'
import Router from 'vue-router'
import Friends from './views/Friends.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'friends',
            component: Friends
        },
        {
            path: '/talk:userId',
            name: 'talk',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/Talk.vue')
        },
        {
            path: '/test',
            name: 'test',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/TEST.vue')
        }
    ]
})