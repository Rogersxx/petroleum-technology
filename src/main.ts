import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "./css/index.less";

const app = createApp(App);
app.use(createPinia());
app.mount("#pt-app");
