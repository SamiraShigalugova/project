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
                                <button class = "tarbtn" @click="tarbtn">{{ textb }}</button> <!-- Привязываем функцию openForm к событию клика на кнопке -->
    <form v-if="isFormVisible"> <!-- Отображаем форму, только если значение свойства isFormVisible равно true -->
        <div class="formel">
          <input type="text" id="name" v-model="name" placeholder="Введите имя" class="formin" required  />
        </div>
        <div class="formel">
          <input type="email" id="email" v-model="email" placeholder="Введите email" class="formin"  required />
        </div>
        <div class="formel">
          <input type="tel" id="phone" v-model="phone" @input="phoneinput" placeholder="Введите телефон" class="formin" required  />
        </div>
        <div class="formel">
          <textarea id="textarea" v-model="message" class="formin" placeholder="Введите сообщение" required ></textarea>
        </div>
        <div class="formel consent-group">
          <input type="checkbox" id="consent" v-model="consent" required  />
          <p class="galka">Согласие с обработкой данных</p>
        </div>
            <button type="button" @click="formbut" class="orbutton">Отправить</button>
    </form>
  </div>
                              </div></div></div>
</template>
<script>
export default {
  data() {
    return {
      isFormVisible: false // Определяем свойство isFormVisible со значением false
    }
  },
  methods: {
    tarbtn() {
      this.isFormVisible = true; // Устанавливаем значение свойства isFormVisible в true при клике на кнопке
    }
  }
}
</script>