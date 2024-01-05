<script setup>
defineProps({
    title:String,
    text:String,
})
</script>

<template>
    <div class="col-lg-4 col-md-4 col-5 support-achievement">
        <div class="support-achievement-wrapper">
            <div class="support-achievement-title">{{title}}</div>
            <div class="support-achievement-description">
                {{text}}
            </div>
        </div>
    </div>
</template>