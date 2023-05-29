import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Result from '../views/Result.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/rezultat', component: Result },
	{ path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
