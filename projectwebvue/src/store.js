import { createStore } from 'vuex';

export default createStore({
  state: {
    showContactForm: false,
    buttonPosition: 0,
<<<<<<< HEAD
    formStatus: 'idle', // 'idle', 'loading', 'success', 'error'
=======
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

>>>>>>> 8436ad11e61882898381244d596a6144d0c1e5b7
  },
  mutations: {
    tarbtn(state) {
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
<<<<<<< HEAD
=======

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
>>>>>>> 8436ad11e61882898381244d596a6144d0c1e5b7
  },
  actions: {
    tarbtn({ commit }) {
      commit('tarbtn');
    },
    closeContactForm({ commit }) {
      commit('closeContactForm');
    },
    submitForm({ commit }) {
      commit('setFormStatus', 'loading');
<<<<<<< HEAD
      // Здесь вы можете добавить логику отправки формы, например, через API
      // После успешной отправки:
      // commit('setFormStatus', 'success');
      // В случае ошибки:
      // commit('setFormStatus', 'error');
    },
=======
  
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
>>>>>>> 8436ad11e61882898381244d596a6144d0c1e5b7
    resetForm({ commit }) {
      commit('setFormStatus', 'idle');
    },
  },
});
