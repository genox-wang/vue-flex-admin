import Vue from 'vue';
import Vuex from 'vuex';
import types from './mutationTypes';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentColor: 'teal',
    alertOptions: {
      isShow: false,
      text: '',
      timeOut: 6000,
      color: '',
    },
  },

  actions: {
    alert({ commit }, payload) {
      commit(types.MUTATION_ALERT_SHOW, payload);
    },
    alertClose({ commit }) {
      commit(types.MUTATION_ALERT_CLOSE);
    },
  },

  mutations: {
    [types.MUTATION_VUE_FLEX_ADMIN_COLOR](state, payload) {
      state.currentColor = payload;
    },
    [types.MUTATION_ALERT_SHOW](state, payload) {
      state.alertOptions.isShow = true;

      state.alertOptions.text = payload.text || '';
      state.alertOptions.timeOut = payload.timeOut || 6000;
      state.alertOptions.color = payload.color || '';
    },
    [types.MUTATION_ALERT_CLOSE](state) {
      state.alertOptions.isShow = false;
    },
  },

  getters: {
  },
});


export default store;
