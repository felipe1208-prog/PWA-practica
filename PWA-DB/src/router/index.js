import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("@/layouts/AuthLayoutView.vue"),
            children: [
                {
                    path: "",
                    name: "login",
                    component: () =>
                        import("@/features/auth/views/LoginView.vue"),
                },
            ],
        },
        {
            path: "/home",
            component: () => import("@/layouts/MainLayoutView.vue"),
            children: [
                {
                    path: "",
                    name: "home",
                    component: () => import("@/features/home/HomeView.vue"),
                },
            ],
        },
    ],
});

export default router;
