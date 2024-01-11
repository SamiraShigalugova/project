import { createStore } from 'vuex';

export default createStore({
  state: {
    showContactForm: false,
    showContactForm1: false,
    showContactForm12: false,
    buttonPosition: 0,
    buttonPosition1:0,
    buttonPosition12:0,
    formStatus: 'idle',
    formStatus1: 'idle', 
    formStatus12: 'idle',
    name: '',  // Добавлено поле name
    email: '',  // Добавлено поле email
    phone: '',  // Добавлено поле phone
    message: '',  // Добавлено поле message
    consent: false,  // Добавлено поле consent
    showSuccessPopup: false,
    showErrorPopup: false,
    showSuccessPopup1: false,
    showErrorPopup1: false,
    showSuccessPopup12: false,
    showErrorPopup12: false,

  },
  mutations: {
    toggleContactForm(state) {
      state.showContactForm = !state.showContactForm;
      if (state.showContactForm) {
        state.buttonPosition += 10;
        state.formStatus = 'idle';
      } else {
        state.formStatus = 'idle';
      }
    },
    tarbtn(state) {
      state.showContactForm = !state.showContactForm;
      if (state.showContactForm) {
        state.buttonPosition = state.buttonPosition + 10;
        state.formStatus = 'idle';
      } else {
        state.formStatus = 'idle';
      }
    },
    tarbtn1(state) {
      state.showContactForm1 = !state.showContactForm1;
      if (state.showContactForm1) {
        state.buttonPosition1 = state.buttonPosition1 + 10;
        state.formStatus1 = 'idle';
      } else {
        state.formStatus1 = 'idle';
      }
    },
    tarbtn12(state) {
      state.showContactForm12 = !state.showContactForm12;
      if (state.showContactForm12) {
        state.buttonPosition12 = state.buttonPosition12 + 10;
        state.formStatus12 = 'idle';
      } else {
        state.formStatus12 = 'idle';
      }
    },
    closeContactForm(state) {
      state.showContactForm = false;
      state.formStatus = 'idle';
    },
    setFormStatus(state, status) {
      state.formStatus = status;
    },

    closeContactForm1(state) {
      state.showContactForm1 = false;
      state.formStatus1 = 'idle';
    },
    setFormStatus1(state, status) {
      state.formStatus1 = status;
    },

    closeContactForm12(state) {
      state.showContactForm12 = false;
      state.formStatus12 = 'idle';
    },
    setFormStatus12(state, status) {
      state.formStatus12 = status;
    },

    setShowSuccessPopup(state, value) {
      state.showSuccessPopup = value;
    },
    setShowErrorPopup(state, value) {
      state.showErrorPopup = value;
    },
    setShowSuccessPopup1(state, value) {
      state.showSuccessPopup1 = value;
    },
    setShowErrorPopup1(state, value) {
      state.showErrorPopup1 = value;
    },
    setShowSuccessPopup12(state, value) {
      state.showSuccessPopup1 = value;
    },
    setShowErrorPopup12(state, value) {
      state.showErrorPopup1 = value;
    },
  },
  actions: {
    toggleContactForm({ commit }) {
      commit('toggleContactForm');
    },
    tarbtn({ commit }) {
      commit('tarbtn');
    },
    tarbtn1({ commit }) {
      commit('tarbtn1');
    },
    tarbtn12({ commit }) {
      commit('tarbtn12');
    },
    closeContactForm({ commit }) {
      commit('closeContactForm');
    },
    closeContactForm1({ commit }) {
      commit('closeContactForm1');
    },closeContactForm12({ commit }) {
      commit('closeContactForm12');
    },
    async submitForm({ commit, state }) {
      commit('setFormStatus', 'loading');
  
      try {
        const response = await fetch('https://formcarry.com/s/VwBQ8BYLOEl', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',  
          },
          body: JSON.stringify({
            name: state.name,
            email: state.email,
            phone: state.phone,
            message: state.message,
            consent: state.consent,
          }),
        });
        console.log('Ответ от сервера:', response);
        if (response.ok) {
          commit('setFormStatus', 'success');
          commit('setShowSuccessPopup', true);
        } else {
          commit('setFormStatus', 'error');
          commit('setShowErrorPopup', true);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        commit('setFormStatus', 'error');
        commit('setShowErrorPopup', true);
      }
    },

      async submitForm1({ commit, state }) {
        commit('setFormStatus1', 'loading');
    
        try {
          const response = await fetch('https://formcarry.com/s/VwBQ8BYLOEl', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',  
            },
            body: JSON.stringify({
              name: state.name,
              email: state.email,
              phone: state.phone,
              message: state.message,
              consent: state.consent,
            }),
          });
          console.log('Ответ от сервера:', response);
          if (response.ok) {
            commit('setFormStatus1', 'success');
            commit('setShowSuccessPopup1', true);
          } else {
            commit('setFormStatus1', 'error');
            commit('setShowErrorPopup1', true);
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          commit('setFormStatus1', 'error');
          commit('setShowErrorPopup1', true);
        }
      }, 

      async submitForm12({ commit, state }) {
        commit('setFormStatus12', 'loading');
    
        try {
          const response = await fetch('https://formcarry.com/s/VwBQ8BYLOEl', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',  
            },
            body: JSON.stringify({
              name: state.name,
              email: state.email,
              phone: state.phone,
              message: state.message,
              consent: state.consent,
            }),
          });
          console.log('Ответ от сервера:', response);
          if (response.ok) {
            commit('setFormStatus12', 'success');
            commit('setShowSuccessPopup12', true);
          } else {
            commit('setFormStatus12', 'error');
            commit('setShowErrorPopup12', true);
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          commit('setFormStatus12', 'error');
          commit('setShowErrorPopup12', true);
        }
      },
    resetForm({ commit }) {
      commit('setFormStatus', 'idle');
    },resetForm1({ commit }) {
      commit('setFormStatus1', 'idle');
    },resetForm12({ commit }) {
      commit('setFormStatus12', 'idle');
    },
  },
});

