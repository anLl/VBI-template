import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import persistedstate from "vuex-persistedstate";
Vue.use(Vuex);

let files = require.context("./modules", false, /\.js$/);
let modules = {};
files.keys().map((key) => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});
export default new Vuex.Store({
  plugins: [
    persistedstate({
      paths: "data",
      key: "Demo",
    }),
  ],
  modules,
  getters,
});
