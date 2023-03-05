import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./components/HomeComponent.vue"),
    },
    {
        path: "/loginV",
        name: "login",
        component: () => import("./components/account/LoginComponent.vue"),
    },
    {
        path: "/logoutV",
        name: "logout",
        component: () => import("./components/account/LogoutComponent.vue"),
    },
    {
        path: "/registrationV",
        name: "registration",
        component: () => import("./components/account/RegistrationComponent.vue"),
    },
    {
        path: "/converterV",
        name: "converter",
        component: () => import("./components/converter/ConverterComponent.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("x_xsrf_token");

    if (!token) {
        if (to.name === "login" || to.name === "registration" ||  to.name === "home") {
            return next();
        } else {
            return next({
                name: "login",
            });
        }
    }

    if (to.name === "login" || to.name === "registration" && token) {
        return next({
            name: "converter",
        });
    }

    next();
})

export default router;
