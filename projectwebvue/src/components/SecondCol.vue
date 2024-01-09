<script setup>
defineProps({
    text:String,
})
</script>


<template>
  <div class="col-xl-6 col-lg-12 col-md-12 col-sm-6 col-xs-12 expertise-col">
    <div class="expertise-item">
        <div class="expertise-item-body">
{{text}}
        </div>
    </div>
</div>
</template>