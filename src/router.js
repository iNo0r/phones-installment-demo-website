import { createRouter, createWebHistory } from "vue-router";

import WhyUs from "./components/Views/WhyUs.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: WhyUs,
    },
  ],
});

export default router;
