import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/Home.vue";
import AboutView from "./views/About.vue";
import Page from "./views/Page.vue";

const routes = [
  //   { path: "/", component: HomeView },
  //   { path: "/about", component: AboutView },
  //   denne linje gør at hvis der ikke er en side der matcher i URL med Home og About, så vælger den page - Her kan man fx style alle sider til projekter ens
  //Dog behøver man ikke at have andet end denne sætning, da about og home også er på CMS
  { path: "/:pathMatch(.*)*", component: Page },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
