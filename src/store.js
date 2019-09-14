import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allData: {
      emoji: "",
      textOne: "",
      articleImage: "",
      comment: "",
      name: "",
      newData: ""
    }
  },
  mutations: {
    setEmoji(state, data) {
      state.allData.emoji = data;
    },
    updateMessage(state, data) {
      state.allData.textOne = data;
    },
    updateImage(state, data) {
      state.allData.articleImage = data;
    },
    updateComment(state, data) {
      state.allData.comment = data;
    },
    updateName(state, data) {
      state.allData.name = data;
    },
    updateData(state, data) {
      state.allData.newData = data;
    }
  },
  actions: {
    addEmoji({ commit }, payload) {
      let page = payload;
      commit("setEmoji", page);
    }
  }
});
