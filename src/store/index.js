import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user(state){
      return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, data) {
      commit("SET_LOGGED_IN", data.user !== null);
      if (data.user) {
        commit("SET_USER", {
          displayName: data.user.displayName,
          email: data.user.email,
          role: data.role
        });
      } else {
        commit("SET_USER", null);
      }
    }
  },
  modules: {
  }
})
