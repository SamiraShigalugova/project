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
      <!-- Ваша форма здесь -->
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