import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import Brand from "../page/Brand.vue";
import Model from "../page/Model.vue";
import Category from "../page/Category.vue";

import Add from "../page/Add.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: Home,
      name: "home",
    },
    {
      path: "/brand",
      component: Brand,
      name: "brand",
    },
    {
      path: "/model",
      component: Model,
      name: "model",
    },
    {
      path: "/category",
      component: Category,
      name: "category",
    },
    {
      path: "/add",
      component: Add,
      name: "add",
    },
  ],
});
export default router;
