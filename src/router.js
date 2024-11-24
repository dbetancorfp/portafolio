import { createRouter, createWebHistory } from "vue-router";
import i18n from './i18n';
import Aboutme from "./components/Aboutme.vue";
import Projects from "./components/Projects.vue";
import Skills from "./components/Skills.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";
import Error404 from "./components/Error404.vue";

const routes = [
  { path: "/", redirect: "/es/aboutme" },
  { path: "/:lang/aboutme", name: "Aboutme", component: Aboutme, beforeEnter: validateLang },
  { path: "/:lang/projects", name: "Projects", component: Projects, beforeEnter: validateLang },
  { path: "/:lang/skills", name: "Skills", component: Skills, beforeEnter: validateLang },
  { path: "/:lang/experience", name: "Experience", component: Experience, beforeEnter: validateLang },
  { path: "/:lang/contact", name: "Contact", component: Contact, beforeEnter: validateLang },
  { path: "/:pathMatch(.*)*", name: "Error404", component: Error404, beforeEnter: validateLang }
];

function validateLang(to, from, next) {
  const lang = to.params.lang;
  const supportedLanguages = ["en", "es", "zh", "mc"];
  if (!supportedLanguages.includes(lang)) {
  return next("/es/about");
  }
  next();
 }
 

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;