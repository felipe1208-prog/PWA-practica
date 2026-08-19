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
            path: "/app",
            component: () => import("@/layouts/MainLayoutView.vue"),
            children: [
                {
                    path: "home",
                    name: "home",
                    component: () => import("@/features/home/HomeView.vue"),
                },
                {
                    path: "busqueda",
                    name: "busqueda",
                    component: () =>
                        import("@/features/busqueda/BusquedaView.vue"),
                },
                {
                    path: "actions",
                    name: "actions",
                    component: () =>
                        import("@/features/actions/ActionsView.vue"),
                },
                {
                    path: "sincronizacion",
                    name: "sync",
                    component: () => import("@/features/sync/SyncView.vue"),
                },
                {
                    path: "perfil",
                    name: "perfil",
                    component: () => import("@/features/perfil/PerfilView.vue"),
                },
            ],
        },
    ],
});

export default router;
