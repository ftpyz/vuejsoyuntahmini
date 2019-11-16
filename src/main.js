import Vue from "vue";
import App from "./App.vue";
import VueReources from "vue-resource";
import vuetify from "./plugins/vuetify";
import Vue2Filters from "vue2-filters";
import VueRouter from "vue-router";
import router from "./router";

Vue.use(Vue2Filters);
Vue.use(VueReources);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
