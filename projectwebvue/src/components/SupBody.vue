<script setup>
defineProps({
    title:String,
    text0:String,
    text:String,
})
</script>
<template>
    <div class="sup-body">
        <span class="sup-text">{{title}}</span>
        <h5 class="sup-title">{{text0}}</h5>
        <p class="sup-text">{{text}}</p>
      </div>
</template>