import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/main.vue";
import Contacts from "@/pages/contacts.vue";
import About from "@/pages/about.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/contacts",
    component: Contacts,
  },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
});

export default router;
