require("./bootstrap");
import * as Vue from "vue";
import App from "./components/app.vue";
import { createRouter, createWebHistory } from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";
import { routes }  from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = Vue.createApp(App);
app.use(router);
app.use(VueAxios,axios);

app.mount("#app");