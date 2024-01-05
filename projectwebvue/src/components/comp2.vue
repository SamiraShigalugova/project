<script setup>
defineProps({
    title:String,
    text:String,
})
</script>

<template>
    <div class="col-sm-3 col-xs-6">
              <div class="competency">
                  <div class="competency-wrapper">
                      <div class="competency-header">
                        <div class="competency-icon"><img src="@/assets/img/competency-21.svg"></div></div>
                    
                      <div class="competency-body">
                          <h2 class="block-title">{{ title }}</h2>
                          {{ text }}
                      </div>
                  </div>
                </div>
              </div>
</template>
<style>.competency{margin-top: 50px;}</style>