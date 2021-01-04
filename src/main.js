import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import onFocus from "./directive/focus";
const app = createApp(App);
console.log(app);

app.use(router).use(store).directive("focus", onFocus).mount("#app");
