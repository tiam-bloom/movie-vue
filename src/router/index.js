import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Index",
      component: () => import("@/layout/Index.vue"),
      redirect: { name: "Home" },
      children: [
        {
          path: "/",
          name: "Home",
          component: () => import("@/views/Home.vue"),
        },
        {
          path: "detail/:id",
          name: "Detail",
          component: ()=>import("@/views/Detail.vue"),
        }
      ],
    },
  ],
});

export default router;
