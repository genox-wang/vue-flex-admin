import Vue from 'vue';
import Vuex from 'vuex';
import types from './mutationTypes';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentColor: 'teal',
  },

  mutations: {
    [types.MUTATION_VUE_FLEX_ADMIN_COLOR](state, payload) {
      state.currentColor = payload;
    },
  },

  getters: {
  },
});


export default store;
