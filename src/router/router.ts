import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/TheWelcome.vue'),
        },
        {
            path: '/labdata',
            component: () => import('../views/LabData.vue'),
            meta: { requiresAuth: true },
        },
        {
            path: '/qadata',
            component: () => import('../views/QaData.vue'),
            meta: { requiresAuth: true },
        },
    ],
});

export default router;
