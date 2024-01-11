<script setup>
defineProps({
    title:String,
    text1:String,
    text2:String,
    text3:String,
    text4:String,
    text5:String,
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
                              <li><span>{{ text4 }}<br></span></li>
                              <li><span>{{ text5 }}<br></span></li></ul>

                              <div class="tariff-footer">
                                <div id="app">
    <button @click="tarbtn12" ref="tarbtn" class="tarbtn12" :disabled="formStatus12 === 'loading'">
      {{ formStatus12 === 'loading' ? 'Отправка...' : 'СВЯЖИТЕСЬ С НАМИ!' }}
    </button>
  </div>
  </div>
                              </div></div></div>
                              <transition name="fade12">
      <div v-if="showContactForm12" class="overlay12">
        <div class="contact-form-container12">
          <div class="contact-form12" :style="{ top: `${buttonPosition12}px`, height: `${formHeight12}px` }">
            <div class="close-button12" @click="closeContactForm12">×</div>
            <h2>Связь с нами</h2>
            <form @submit.prevent="submitForm12">
        <div class="formel12">
          <input type="text" id="name" v-model="name" placeholder="Введите имя" class="formintar" required  />
        </div>
        <div class="formel12">
          <input type="email" id="email" v-model="email" placeholder="Введите email" class="formintar"  required />
        </div>
        <div class="formel12">
          <input type="tel" id="phone" v-model="phone" @input="phoneinput" placeholder="Введите телефон" class="formintar" required  />
        </div>
        <div class="formel12">
          <textarea id="textarea" v-model="message" class="formintar" placeholder="Введите сообщение" required ></textarea>
        </div>
        <div class="formeltar consent-group12">
          <input type="checkbox" id="consent" v-model="consent" required  />
          <p class="galkatar">Согласие с обработкой данных</p>
        </div>
              <button type="submit" class="btnform12" :disabled="formStatus12 === 'loading'">Отправить</button>
            </form>
            <div v-if="showSuccessPopup12" class="success-popup">
              Форма успешно отправлена!
              <button @click="closePopup12" class="btnwinsuc">Закрыть</button>
            </div>
            <div v-if="showErrorPopup12" class="error-popup">
              Ошибка при отправке формы. Пожалуйста, попробуйте еще раз.
              <button @click="closePopup12" class="btnwiner">Попробовать еще раз</button>
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
      formHeight12: 0,
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
      showSuccessPopup12: false,
      showErrorPopup12: false,
      isFormLoading12: false,
    };
  },
  computed: {

    showSuccessPopup12() {
      return this.$store.state.showSuccessPopup1;
    },
    showErrorPopup12() {
      return this.$store.state.showErrorPopup1;
    },

    showContactForm12() {
      return this.$store.state.showContactForm12;
    },
    buttonPosition12() {
      return this.$store.state.buttonPosition12;
    },
    formStatus12() {
      return this.$store.state.formStatus12;
    },
  },
  watch: {
    formStatus12(newStatus12) {
      if (newStatus12 === 'success') {

        this.$store.commit('setShowSuccessPopup12', true);

      } else if (newStatus12 === 'error') {

        this.$store.commit('setShowErrorPopup12', true);

      }
    },
  },
  methods: {
    tarbtn12() {
      this.$store.dispatch('tarbtn12');
      if (this.showContactForm12) {
        this.animateOpenForm12();
      }
    },
    closeContactForm12() {
      this.$store.dispatch('closeContactForm12');
    },
    animateOpenForm12() {
      const startTime12 = performance.now();
      const startHeight12 = 0;
      const endHeight12 = 500; // высота формы

      const animate12 = (currentTime) => {
        const progress12 = (currentTime - startTime12) / 500; // 500ms для анимации
        this.formHeight12 = startHeight12 + (endHeight12 - startHeight12) * Math.min(progress12, 1);

        if (progress12 < 1) {
          requestAnimationFrame(animate12);
        }
      };

      requestAnimationFrame(animate12);
    },
    closePopup12() {
      this.$store.commit('setShowSuccessPopup12', false);
      this.$store.commit('setShowErrorPopup12', false);
    },

    async submitForm12() {
      this.$store.dispatch('submitForm12');
  

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
          this.$store.dispatch('setFormStatus12', 'success');
        } else {
          this.$store.dispatch('setFormStatus12', 'error');
        }
      } catch (error) {
        this.$store.dispatch('setFormStatus12', 'error');
      }
    },
    
    resetForm12() {
      this.$store.dispatch('resetForm12');
      this.formHeight12 = 0;
    },
  },
};


</script>
<style> @media screen and (max-width: 1024px){.formeltar.consent-group12{display: flex;}
.contact-form-container12 { z-index: 999999;
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
.fade12-enter-active, .fade12-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade12-enter, .fade12-leave-to {
  opacity: 0;
}

.overlay12 {z-index: 9999;
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

.contact-form12 {
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
  width:100%;
}
.close-button12 {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 25px;
  color: orangered;
}
.galkatar{color: black;}
.btnform12{text-decoration: none;
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
      .formel12{border: 2px orangered; border-radius: 3px; margin:10px}
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
}.success-popup{
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
      @media screen and (min-width: 1024px){.formeltar.consent-group12{display: flex;}
.contact-form-container12 { z-index: 999999;
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
.fade12-enter-active, .fade12-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade12-enter, .fade12-leave-to {
  opacity: 0;
}

.overlay12 {z-index: 9999;
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

.contact-form12 {
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
.close-button12 {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 25px;
  color: orangered;
}
.galkatar{color: black;}
.btnform12{text-decoration: none;
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
      .formel12{border: 2px orangered; border-radius: 3px; margin:10px}
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
}.success-popup{
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


