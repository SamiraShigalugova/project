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
                                  <a href="#forma" class="tar-btn">{{ textb }}</a>
                              </div></div>
                          </div>
                      </div>
</template>