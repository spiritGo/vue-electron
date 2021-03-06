import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import config from "./config";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/base.scss";

Vue.config.productionTip = false;
Vue.prototype.$conf = config;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
