import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./style.css";

const pinia = createPinia()
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
