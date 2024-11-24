import { createApp, watchEffect } from "vue";
import i18n from "./i18n";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import "./style.css";

const app = createApp(App);

watchEffect(() => {
  const currentRoute = router.currentRoute.value;
  const lang = currentRoute.params.lang || "es";
  if (i18n.global.locale.value !== lang) {
    i18n.global.locale.value = lang;
    localStorage.setItem("language", lang);
  }
});

app.use(i18n);
app.use(router);
app.use(BootstrapIconsPlugin);
app.mount("#app");