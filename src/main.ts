import { createApp, watchEffect } from "vue";
import i18n from "./i18n";
import App from './App.vue';
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./style.css";
const app = createApp(App);
// Sincroniza el idioma en la URL con i18n
watchEffect(() => {
const currentRoute = router.currentRoute.value; // Obtén la ruta actual
const lang = currentRoute.params.lang || "es"; // Idioma en la ruta o por defecto
if (i18n.global.locale.value !== lang) {
i18n.global.locale.value = lang; // Actualiza el idioma de i18n
localStorage.setItem("language", lang); // Guarda el idioma en localStorage
}
});
app.use(i18n);
app.use(router);
app.mount("#app");