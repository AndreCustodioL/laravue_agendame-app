import { needAuthentication } from '@/router/guards';

const MainRoutes = {
    path: '/',
    component: () => import('@/layouts/full/FullLayout.vue'),
    beforeEnter: needAuthentication,
    children: [
        {
            name: 'dashboard',
            path: '/',
            component: () => import('@/views/dashboard/index.vue')
        },
    ]
};

export default MainRoutes;
