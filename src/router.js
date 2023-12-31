import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import ContattiPage from "./pages/ContattiPage.vue";
import ChiSiamo from "./pages/ChiSiamo.vue";




const router = createRouter({

    history: createWebHistory(),

    routes: [
      {
          path: "/contatti",
          name: "contatti",
          component: ContattiPage
      },
      {
          path: "/",
          name: "home",
          component: Home
      },
      {
          path: "/chi-siamo",
          name: "chi-siamo",
          component: ChiSiamo
      },
  ]
});


export { router };