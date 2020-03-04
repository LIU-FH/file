import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('../views/index.vue')
const Files = () => import('../views/files.vue')
const Md = () => import('../views/md.vue')
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component:Index ,
        children: [
            {
                path: '/',
                name: 'index',
                component: Files,
            },
        ]
    },
    {
        path: '/md',
        name: 'md',
        component: Md,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: to => {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0};
        }
    }
})

export default router
