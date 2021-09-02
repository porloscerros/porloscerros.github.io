import Page from "@/layout/Page";
import Home from "@/views/Home";
import PS5Exercises from "./routes/ps5/exercises"

export default [
    {
        path: '/',
        component: Page,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '',
                name: 'Home',
                component: Home,
            },
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            },
            PS5Exercises,
        ]
    },
    {
        path: '/404',
        name: '404',
        component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
    },
    { path: '/:pathMatch(.*)*', redirect: '/404' },
]