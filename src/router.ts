import { createRouter, createWebHistory } from "vue-router";
import Aboutme from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";

const routes = [
  { path: "/", redirect: "/es/about" },
  {
    path: "/:lang/about",
    name: "About",
    component: Aboutme,
    beforeEnter: validateLang,
  },
  {
    path: "/:lang/projects",
    name: "Projects",
    component: Projects,
    beforeEnter: validateLang,
  },
  {
    path: "/:lang/skills",
    name: "Skills",
    component: Skills,
    beforeEnter: validateLang,
  },
];

function validateLang(to: any) {
  const lang = to.params.lang;
  const supportedLanguages = ["en", "es"];
  if (!supportedLanguages.includes(lang)) {
    return { path: "/es/about" }; // Redirigir al idioma por defecto
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;