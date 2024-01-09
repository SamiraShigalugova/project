<template>
    <div class="container">
      <button @click="toggleForm"></button>
      <transition name="fade">
        <form v-if="showForm" class="form" :style="formStyles" @click.self="closeForm">
          <h2>Моя форма</h2>
          <div>
            <label for="name">Имя:</label>
            <input type="text" id="name">
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email">
          </div>
          <button type="submit">Отправить</button>
        </form>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showForm: false, // Переменная для отображения/скрытия формы
        formHeight: 0, // Высота формы
      };
    },
    computed: {
      formStyles() {
        return {
          height: `${this.formHeight}px`, // Применяем текущую высоту формы
        };
      },
    },
    methods: {
      toggleForm() {
        this.showForm = !this.showForm; // Изменяем значение переменной для отображения/скрытия формы
        if (this.showForm) {
          setTimeout(() => {
            this.animateFormOpening();
          }, 100); // Добавляем небольшую задержку перед началом анимации
        } else {
          this.animateFormClosing();
        }
      },
      animateFormOpening() {
        // Получаем высоту формы
        const formElement = document.querySelector('.form');
        this.formHeight = formElement.scrollHeight;
  
        // Анимация открытия формы
        const start = performance.now();
        const duration = 500; // Продолжительность анимации в миллисекундах
  
        const animate = (timestamp) => {
          const elapsed = timestamp - start;
          const progress = elapsed / duration;
  
          if (progress >= 1) {
            formElement.style.height = 100; // Устанавливаем высоту формы в auto, чтобы она могла растягиваться по содержимому
          } else {
            formElement.style.height = `${this.formHeight * progress}px`;
            requestAnimationFrame(animate);
          }
        };
  
        requestAnimationFrame(animate);
      },
      animateFormClosing() {
        // Анимация закрытия формы
        const formElement = document.querySelector('.form');
        const start = performance.now();
        const duration = 500; // Продолжительность анимации в миллисекундах
        const initialHeight = formElement.scrollHeight;
  
        const animate = (timestamp) => {
          const elapsed = timestamp - start;
          const progress = elapsed / duration;
  
          if (progress >= 1) {
            formElement.style.height = 0;
            this.formHeight = 0;
          } else {
            formElement.style.height = `${initialHeight * (1 - progress)}px`;
            this.formHeight = initialHeight * (1 - progress);
            requestAnimationFrame(animate);
          }
        };
  
        requestAnimationFrame(animate);
      },
      closeForm() {
        this.showForm = false; // Закрываем форму при клике вне ее области
        this.animateFormClosing();
      },
    },
  };
  </script>
  
  <style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .form {
    overflow: hidden;
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 5px;
    max-width: 400px;
    width: 100%;
  }
  .form h2 {
    margin-bottom: 10px;
  }
  .form div {
    margin-bottom: 10px;
  }
  .form label {
    display: block;
    font-weight: bold;
  }
  .form input {
    width: 100%;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
  }
  .form button {
    padding: 10px 20px;
    background-color: #bb551e;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  </style>