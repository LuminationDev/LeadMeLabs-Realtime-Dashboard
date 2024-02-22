import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/LeadMeLabs-Realtime-Dashboard/',
            component: () => import('../views/TheWelcome.vue'),
        },
        {
            path: '/LeadMeLabs-Realtime-Dashboard/labdata',
            component: () => import('../views/LabData.vue'),
            meta: { requiresAuth: true },
        },
        {
            path: '/LeadMeLabs-Realtime-Dashboard/qadata',
            component: () => import('../views/QaData.vue'),
            meta: { requiresAuth: true },
        },
    ],
});

export default router;
