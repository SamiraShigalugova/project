<!-- <template>
  <div id="app">
    <button @click="tarbtn" ref="tarbtn" :disabled="formStatus === 'loading'">
      {{ formStatus === 'loading' ? 'Отправка...' : 'Связь с нами' }}
    </button>
    <transition name="fade">
      <div v-if="showContactForm" class="overlay">
        <div class="contact-form-container">
          <div class="contact-form" :style="{ top: `${buttonPosition}px`, height: `${formHeight}px` }">
            <div class="close-button" @click="closeContactForm">×</div>
            <h2>Контактная форма</h2>
            <form @submit.prevent="submitForm">

              <button type="submit" :disabled="formStatus === 'loading'">Отправить</button>
            </form>
            <div v-if="formStatus === 'success'" class="success-message">
              Форма успешно отправлена!
              <button @click="resetForm">Отправить еще раз</button>
            </div>
            <div v-if="formStatus === 'error'" class="error-message">
              Ошибка при отправке формы. Пожалуйста, попробуйте еще раз.
              <button @click="resetForm">Попробовать еще раз</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formHeight: 0,
    };
  },
  computed: {
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
      const endHeight = 200; // высота формы

      const animate = (currentTime) => {
        const progress = (currentTime - startTime) / 500; // 500ms для анимации
        this.formHeight = startHeight + (endHeight - startHeight) * Math.min(progress, 1);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    },
    submitForm() {
      this.$store.dispatch('submitForm');
      // Дополнительная логика после отправки формы
    },
    resetForm() {
      this.$store.dispatch('resetForm');
      this.formHeight = 0;
    },
  },
};
</script> -->

<!-- <style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Затемненный фон */
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-form-container {
  position: relative;
}

.contact-form {
  position: relative;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 18px;
  color: #333;
}
.success-message,
.error-message {
  color: rgb(128, 85, 0); /* Добавьте цвет, который соответствует вашему дизайну */
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style> -->
