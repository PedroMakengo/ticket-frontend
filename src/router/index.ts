import { createWebHistory, createRouter, type RouteRecordRaw } from "vue-router";

// Layout
import Layout from "@/layouts/default.vue";
// Auth
import PageAuth from "@/pages/auth/pages/index.vue";
import PageUsuarios from "@/pages/admin/usuarios/pages/index.vue";

// Admin
import { routesAdmin } from "./menu_admin";
// Guard
import { authGuard } from "@/middleware";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: PageAuth,
    meta: { requiresAuth: false, publicOnly: true },
  },
  {
    path: "/dashboard",
    component: Layout,
    meta: { requiresAuth: false },
    children: [...routesAdmin],
  },
  // {
  //   path: "/:pathMatch(.*)*",
  //   component: PageForgotNotFound,
  //   meta: { requiresAuth: false },
  // },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(authGuard);
