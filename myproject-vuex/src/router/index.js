import Vue from 'vue'

import HomePage from "@/pages/HomePage";
import TodoPage from "@/pages/TodoPage";

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { 
        name: 'home', 
        path: '/', 
        component: HomePage
    },
    {
        name: 'todo',
        path: '/todo/:id',
        component: () => import ('../pages/TodoEditPage.vue')
    },
    {
        name: 'todos',
        path: '/todos',
        component: TodoPage
    },
]

const router = new VueRouter({
    mode: 'history',
    routes //short for routes:routes
});

export default router;