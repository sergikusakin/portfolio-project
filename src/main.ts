import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import Contacts from "@/pages/contacts.vue";
import AboutMe from "@/pages/aboutMe.vue";

const app = createApp(App);

app.use(router).mount("#app");
