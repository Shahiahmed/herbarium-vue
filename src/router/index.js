import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/catalogue",
      name: "catalogue",
      component: () => import("../views/CatalogueView.vue"),
    },
    {
      path: "/herbarium",
      name: "herbarium",
      component: () => import("../views/herbariumView.vue"),
    },
    {
      path: "/seeds",
      name: "seeds",
      component: () => import("../views/SeedsView.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../components/mainpage/Registration.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/mainpage/Login.vue"),
    },
  ],
});

export default router;
