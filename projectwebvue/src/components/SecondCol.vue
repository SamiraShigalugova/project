<script setup>
defineProps({
    picture_src: String,
    text:String,
})
</script>
<template>
    <div class="col-lg-3 col-md-4 col-sm-2 col-6 competency-achievement">
        <div class="competency-achievement-wrapper"><img :src="picture_src"></div>
        <div class="competency-achievement-description">
          {{text}}
        </div>
      </div>
</template>