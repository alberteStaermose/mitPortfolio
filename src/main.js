import { createApp } from "vue";
import "@/assets/styles/main.css";
import App from "./App.vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import router from "./router.js";

const app = createApp(App);

app.use(router);

//Herunder henviser/importerer jeg dataen fra CMS med access key - denne acces key skal være hemmelig og ikke med op på gitHub så den ikke kan blive misbrugt
//Derfor benytter jeg ".env", som jeg i gitignore har sat ind, og henviser derfor herunder til at key ligger i ".env"
app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

app.mount("#app");
