import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueToastr2 from "vue-toastr-2";
import "vue-toastr-2/dist/vue-toastr-2.min.css";
var SocialSharing = require("vue-social-sharing");

Vue.use(SocialSharing);

window.toastr = require("toastr");

Vue.use(VueToastr2);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
