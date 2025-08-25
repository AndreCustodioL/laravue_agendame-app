const MainRoutes = {
    path: '/',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'dashboard',
            path: '/',
            component: () => import('@/views/dashboard/index.vue')
        },
    ]
};

export default MainRoutes;
