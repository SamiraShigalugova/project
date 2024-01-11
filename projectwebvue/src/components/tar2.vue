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
    <button @click="tarbtn1" ref="tarbtn1" class="tarbtn1" :disabled="formStatus1 === 'loading'">
      {{ formStatus1 === 'loading' ? 'Отправка...' : 'СВЯЖИТЕСЬ С НАМИ!' }}
    </button>
  </div>
  </div>
                              </div></div></div>
                              <transition name="fade1">
      <div v-if="showContactForm1" class="overlay1">
        <div class="contact-form-container1">
          <div class="contact-form1" :style="{ top: `${buttonPosition1}px`, height: `${formHeight1}px` }">
            <div class="close-button1" @click="closeContactForm1">×</div>
            <h2>Cвязь с нами</h2>
            <form @submit.prevent="submitForm1">
        <div class="formel1">
          <input type="text" id="name" v-model="name" placeholder="Введите имя" class="formin1" required  />
        </div>
        <div class="formel1">
          <input type="email" id="email" v-model="email" placeholder="Введите email" class="formin1"  required />
        </div>
        <div class="formel1">
          <input type="tel" id="phone" v-model="phone" @input="phoneinput" placeholder="Введите телефон" class="formin1" required  />
        </div>
        <div class="formel1">
          <textarea id="textarea" v-model="message" class="formin1" placeholder="Введите сообщение" required ></textarea>
        </div>
        <div class="formel consent-group1">
          <input type="checkbox" id="consent" v-model="consent" required  />
          <p class="galka1">Согласие с обработкой данных</p>
        </div>
              <button type="submit" class="btnform1" :disabled="formStatus1 === 'loading'">Отправить</button>
            </form>
            <div v-if="showSuccessPopup1" class="success-popup">
              Форма успешно отправлена!
              <button @click="closePopup1" class="btnwinsuc">Закрыть</button>
            </div>
            <div v-if="showErrorPopup1" class="error-popup">
              Ошибка при отправке формы. Пожалуйста, попробуйте еще раз.
              <button @click="closePopup1" class="btnwiner">Попробовать еще раз</button>
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
      formHeight1: 0,
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
      showSuccessPopup1: false,
      showErrorPopup1: false,
      isFormLoading1: false,
    };
  },
  computed: {

    showSuccessPopup1() {
      return this.$store.state.showSuccessPopup1;
    },
    showErrorPopup1() {
      return this.$store.state.showErrorPopup1;
    },


    showContactForm1() {
      return this.$store.state.showContactForm1;
    },
    buttonPosition1() {
      return this.$store.state.buttonPosition1;
    },
    formStatus1() {
      return this.$store.state.formStatus1;
    },
  },

  watch: {
    formStatus1(newStatus1) {
      if (newStatus1 === 'success') {

        this.$store.commit('setShowSuccessPopup1', true);

      } else if (newStatus1 === 'error') {

        this.$store.commit('setShowErrorPopup1', true);

      }
    },
  },
  methods: {
    tarbtn1() {
      this.$store.dispatch('tarbtn1');
      if (this.showContactForm1) {
        this.animateOpenForm1();
      }
    },
    closeContactForm1() {
      this.$store.dispatch('closeContactForm1');
    },
    animateOpenForm1() {
      const startTime1 = performance.now();
      const startHeight1 = 0;
      const endHeight1 = 500; // высота формы

      const animate1 = (currentTime) => {
        const progress1 = (currentTime - startTime1) / 500; // 500ms для анимации
        this.formHeight1 = startHeight1 + (endHeight1 - startHeight1) * Math.min(progress1, 1);

        if (progress1 < 1) {
          requestAnimationFrame(animate1);
        }
      };

      requestAnimationFrame(animate1);
    },
    closePopup1() {
      this.$store.commit('setShowSuccessPopup1', false);
      this.$store.commit('setShowErrorPopup1', false);
    },
    async submitForm1() {
      this.$store.dispatch('submitForm1');
  

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
          this.$store.dispatch('setFormStatus1', 'success');
        } else {
          this.$store.dispatch('setFormStatus1', 'error');
        }
      } catch (error) {
        this.$store.dispatch('setFormStatus1', 'error');
      }
    },
    resetForm1() {
      this.$store.dispatch('resetForm1');
      this.formHeight1 = 0;
    },
  },
};


</script>
<style>
@media screen and (max-width: 1024px){
.galka1{color: black;}
.contact-form-container1 { z-index: 999999;
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
.fade1-enter-active, .fade1-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade1-enter, .fade1-leave-to {
  opacity: 0;
}

.overlay1 {z-index: 9999;
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

.contact-form1 {
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
  width: 100%;
}
.close-button1 {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 25px;
  color: orangered;
}
.btnform1{text-decoration: none;
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
      .formel1{border: 2px orangered;
    border-radius: 3px;
    margin: 10px;}
.formin1{background-color: #ffffff;
    border: 1px solid orangered;
    border-radius: 3px;
    width: 100%;
    padding: 8px;
    font-size: 15px;
    box-sizing: border-box;
    color: black;
    height: 50px;
} textarea.formin1{resize: vertical;
  border-radius: 3px;
  height: 100px;}
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

.error-popup {border: 2px solid rgb(143, 15, 15);;
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
  color: rgb(143, 15, 15);
}
.btnwiner{color: rgb(121, 17, 17);; background-color: white;
      border: 1px solid rgb(121, 17, 17);;border-radius: 5px;}
    .btnwinsuc{color: rgb(9, 83, 9); background-color: white;
      border: 1px solid rgb(9, 83, 9);border-radius: 5px;}
.formel.consent-group1{display: flex;}}
@media screen and (min-width: 1024px){.galka1{color: black;}
.contact-form-container1 { z-index: 999999;
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
.fade1-enter-active, .fade1-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade1-enter, .fade1-leave-to {
  opacity: 0;
}

.overlay1 {z-index: 9999;
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

.contact-form1 {
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
.close-button1 {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 25px;
  color: orangered;
}
.btnform1{text-decoration: none;
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
      .formel1{border: 2px orangered;
    border-radius: 3px;
    margin: 10px;}
.formin1{background-color: #ffffff;
    border: 1px solid orangered;
    border-radius: 3px;
    width: 100%;
    padding: 8px;
    font-size: 15px;
    box-sizing: border-box;
    color: black;
    height: 50px;
} textarea.formin1{resize: vertical;
  border-radius: 3px;
  height: 100px;}
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

.error-popup {border: 2px solid rgb(143, 15, 15);;
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
  color: rgb(143, 15, 15);
}
.btnwiner{color: rgb(121, 17, 17);; background-color: white;
      border: 1px solid rgb(121, 17, 17);;border-radius: 5px;}
    .btnwinsuc{color: rgb(9, 83, 9); background-color: white;
      border: 1px solid rgb(9, 83, 9);border-radius: 5px;}
.formel.consent-group1{display: flex;}}
</style>
                              
