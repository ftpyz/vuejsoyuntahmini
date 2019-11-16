import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    sayac: 0
  },
  getters: {
    getirSayac(state) {
      return state.sayac;
    }
  },
  mutations: {
    sayaciArttir(state) {
      state.sayac++;
    }
  }
});
export default store;
