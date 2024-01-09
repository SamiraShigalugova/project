import { createStore } from 'vuex';

export default createStore({
  state: {
    showContactForm: false,
    buttonPosition: 0,
    formStatus: 'idle', // 'idle', 'loading', 'success', 'error'
  },
  mutations: {
    toggleContactForm(state) {
      state.showContactForm = !state.showContactForm;
      if (state.showContactForm) {
        state.buttonPosition = state.buttonPosition + 10;
        state.formStatus = 'idle';
      } else {
        state.formStatus = 'idle';
      }
    },
    closeContactForm(state) {
      state.showContactForm = false;
      state.formStatus = 'idle';
    },
    setFormStatus(state, status) {
      state.formStatus = status;
    },
  },
  actions: {
    toggleContactForm({ commit }) {
      commit('toggleContactForm');
    },
    closeContactForm({ commit }) {
      commit('closeContactForm');
    },
    submitForm({ commit }) {
      commit('setFormStatus', 'loading');
      // Здесь вы можете добавить логику отправки формы, например, через API
      // После успешной отправки:
      // commit('setFormStatus', 'success');
      // В случае ошибки:
      // commit('setFormStatus', 'error');
    },
    resetForm({ commit }) {
      commit('setFormStatus', 'idle');
    },
  },
});
