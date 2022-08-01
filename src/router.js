import { createRouter, createWebHistory } from "vue-router";

import WhyUs from "./components/Views/WhyUs.vue";
import Phones from "./components/Views/Phones.vue";
import About from "./components/Views/About.vue";
import BuyAPhone from "./components/Views/BuyAPhone.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: WhyUs,
    },
    {
      path: "/phones",
      component: Phones,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/buy-a-phone",
      component: BuyAPhone,
    },
  ],
});

export default router;
