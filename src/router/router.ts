import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/main.vue";
import Contacts from "@/pages/contacts.vue";
import AboutMe from "@/pages/aboutMe.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/contacts",
    component: Contacts,
  },
  {
    path: "/aboutme",
    component: AboutMe,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
});

export default router;
