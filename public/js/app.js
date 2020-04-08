import Vue from 'vue'
import Framework7 from 'framework7/framework7-lite.esm.bundle';
import Framework7Vue from "framework7-vue/framework7-vue.esm.bundle';
import App from "../../src/components/app.vue";

Framework7.use(Framework7Vue);

// Init Vue App
export default new Vue({
  // Root Element
  el: "#app",
  render: c => c(App)
});
