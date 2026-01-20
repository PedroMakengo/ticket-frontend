import { createWebHistory, createRouter, type RouteRecordRaw } from "vue-router";

// Auth
import PageAuth from "@/pages/auth/pages/index.vue";

// Admin
import PageAdmin from "@/pages/admin/home/pages/index.vue";

import Layout from "@/layouts/default.vue";

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
    children: [
      {
        path: "",
        component: PageAdmin,
        meta: { requiresAuth: false },
      },
    ],
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
