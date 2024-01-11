<script setup>
defineProps({
    title:String,
    text1:String,
    text2:String,
    text3:String,
    text4:String,
    textb:String,
})
</script>

<template>
    <div class="col-lg-4 col-md-12 col-xs-12 col-flex">
                      <div class="tariff">
                          <div class="tariff-wrapper">
                              <div class="tariff-header">
                                  <div class="tariff-title">{{ title }}</div><br>
                              </div>
                              <ul class="spisok">
                                  <li><span>{{ text1 }}<br></span></li>
                                  <li><span>{{ text2 }}<br></span></li>
                                <li><span>{{ text3 }}<br></span></li>
                              <li><span>{{ text4 }}<br></span></li></ul>
                          
                              <div class="tariff-footer">
                                <div id="app">
    <button @click="tarbtn" ref="tarbtn" class="tarbtn" :disabled="formStatus === 'loading'">
      {{ formStatus === 'loading' ? 'Отправка...' : 'СВЯЖИТЕСЬ С НАМИ!' }}
    </button>
  </div>
  </div>
                              </div></div></div><transition name="fade">
      <div v-if="showContactForm" class="overlay">
        <div class="contact-form-container">
          <div class="contact-form" :style="{ top: `${buttonPosition}px`, height: `${formHeight}px` }">
            <div class="close-button" @click="closeContactForm">×</div>
            <h2>Связь с нами</h2>
            <form @submit.prevent="submitForm">
        <div class="formeltar">
          <input type="text" id="name" v-model="name" placeholder="Введите имя" class="formintar" required  />
        </div>
        <div class="formeltar">
          <input type="email" id="email" v-model="email" placeholder="Введите email" class="formintar"  required />
        </div>
        <div class="formeltar">
          <input type="tel" id="phone" v-model="phone" @input="phoneinput" placeholder="Введите телефон" class="formintar" required  />
        </div>
        <div class="formeltar">
          <textarea id="textarea" v-model="message" class="formintar" placeholder="Введите сообщение" required ></textarea>
        </div>
        <div class="formeltar consent-groups">
          <input type="checkbox" id="consent" v-model="consent" required  />
          <p class="galkatar">Согласие с обработкой данных</p>
        </div>
              <button type="submit" class="btnform" :disabled="formStatus === 'loading'">Отправить</button>
            </form>
            <div v-if="showSuccessPopup" class="success-popup">
              Форма успешно отправлена!
              <button @click="closePopup" class="btnwinsuc">Закрыть</button>
            </div>
            <div v-if="showErrorPopup" class="error-popup">
              Ошибка при отправке формы. Пожалуйста, попробуйте еще раз.
              <button @click="closePopup" class="btnwiner">Попробовать еще раз</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>


 <script>
export default {
  data() {
    return {
      formHeight: 0,
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
      showSuccessPopup: false,
      showErrorPopup: false,
      isFormLoading: false,
    };
  },
  computed: {

    showSuccessPopup() {
      return this.$store.state.showSuccessPopup;
    },
    showErrorPopup() {
      return this.$store.state.showErrorPopup;
    },


    showContactForm() {
      return this.$store.state.showContactForm;
    },
    buttonPosition() {
      return this.$store.state.buttonPosition;
    },
    formStatus() {
      return this.$store.state.formStatus;
    },
  },
  watch: {
    formStatus(newStatus) {
      if (newStatus === 'success') {

        this.$store.commit('setShowSuccessPopup', true);

      } else if (newStatus === 'error') {

        this.$store.commit('setShowErrorPopup', true);

      }
    },
  },
  methods: {
    tarbtn() {
      this.$store.dispatch('tarbtn');
      if (this.showContactForm) {
        this.animateOpenForm();
      }
    },
    closeContactForm() {
      this.$store.dispatch('closeContactForm');
    },
    animateOpenForm() {
      const startTime = performance.now();
      const startHeight = 0;
      const endHeight = 500; // высота формы

      const animate = (currentTime) => {
        const progress = (currentTime - startTime) / 500; // 500ms для анимации
        this.formHeight = startHeight + (endHeight - startHeight) * Math.min(progress, 1);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    },
    
    closePopup() {
      this.$store.commit('setShowSuccessPopup', false);
      this.$store.commit('setShowErrorPopup', false);
    },
    

    async submitForm() {
      this.$store.dispatch('submitForm');
  

      try {
        const response = await fetch('https://formcarry.com/s/VwBQ8BYLOEl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message,
            consent: this.consent,
          }),
        });

        if (response.ok) {
          this.$store.dispatch('setFormStatus', 'success');
        } else {
          this.$store.dispatch('setFormStatus', 'error');
        }
      } catch (error) {
        this.$store.dispatch('setFormStatus', 'error');
      }
    },

    resetForm() {
      this.$store.dispatch('resetForm');
      this.formHeight = 0;
    },
  },
};
</script> 
      
      


<style>

@media screen and (max-width: 1024px){.contact-form{width: 100%;}.contact-form-container { z-index: 999999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5); /* полупрозрачный фон */
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}.formeltar{display:flex;border: 2px orangered; border-radius: 3px; margin:10px}
.formintar{background-color: #ffffff;border: 1px solid orangered; border-radius: 3px;width: 100%;
  padding: 8px;
  font-size: 15px;
  box-sizing: border-box;
  color: black;
  height: 50px;}
  textarea.formintar {
  resize: vertical;
  border-radius: 3px;
  height: 100px; 
}
.overlay {z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-form {
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border: 2px solid orangered;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 25px;
  color: orangered;
}
.galkatar{color: black;}
.btnform{text-decoration: none;
      display: block;
    border-radius: 5px;
  text-transform: uppercase;
      color: #ffffff;
      border: 1px solid #f14d34;
      text-align: center;
      transition: all 500ms;
      position: absolute;
      padding: 20px;
      line-height: 1;
      font-size: 12px;
      font-weight: 500;
      margin: 20px;
      left: 0;
      right: 0;
      bottom: 0;background-color: orangered}
      
      .success-popup{width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  color: rgb(9, 83, 9);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-popup {width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(121, 17, 17);
}
.btnwiner{color: rgb(121, 17, 17);; background-color: white;
      border: 1px solid rgb(121, 17, 17);;border-radius: 5px;}
    .btnwinsuc{color: rgb(9, 83, 9); background-color: white;
      border: 1px solid rgb(9, 83, 9);border-radius: 5px;}}
@media screen and (min-width:1024px){.consent-groups{display: flex;flex-direction: row;}
  

.contact-form-container { z-index: 999999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5); /* полупрозрачный фон */
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}.formeltar{border: 2px orangered; border-radius: 3px; margin:10px}
.formintar{background-color: #ffffff;border: 1px solid orangered; border-radius: 3px;width: 100%;
  padding: 8px;
  font-size: 15px;
  box-sizing: border-box;
  color: black;
  height: 50px;}
  textarea.formintar {
  resize: vertical;
  border-radius: 3px;
  height: 100px; 
}
.overlay {z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-form {
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border: 2px solid orangered;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 50%;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 25px;
  color: orangered;
}
.galkatar{color: black;}
.btnform{text-decoration: none;
      display: block;
    border-radius: 5px;
  text-transform: uppercase;
      color: #ffffff;
      border: 1px solid #f14d34;
      text-align: center;
      transition: all 500ms;
      position: absolute;
      padding: 20px;
      line-height: 1;
      font-size: 12px;
      font-weight: 500;
      margin: 20px;
      left: 0;
      right: 0;
      bottom: 0;background-color: orangered}
      
      .success-popup{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  color: rgb(9, 83, 9);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(121, 17, 17);
}
.btnwiner{color: rgb(121, 17, 17);; background-color: white;
      border: 1px solid rgb(121, 17, 17);;border-radius: 5px;}
    .btnwinsuc{color: rgb(9, 83, 9); background-color: white;
      border: 1px solid rgb(9, 83, 9);border-radius: 5px;}}
</style>