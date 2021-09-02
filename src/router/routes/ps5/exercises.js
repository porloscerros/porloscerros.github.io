import BodyContent from "@/layout/BodyContent";

const routes = {
    path: '/ps5',
    name: 'ps5',
    component: BodyContent,
    meta: {

    },
    children: [
        {
            path: '',
            name: 'PS5',
            component: () => import('@/views/Home'),
        },
        {
            path: 'greenrain',
            name: 'Green Rain',
            component:  () => import('@/components/ps5/green_rain/GreenRain.vue'),
        },
    ]
};

export default routes;
