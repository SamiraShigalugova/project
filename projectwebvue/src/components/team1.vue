<script setup>
defineProps({
    title1:String,
    title2:String,
    title3:String,
    title4:String,
    title5:String,
    text1:String,
    text2:String,
    text3:String,
    text4:String,
    text5:String,
})
</script>
<template>
    <div class="col-6 col-sm-4">
                  <div class="user-teaser">
                      <div class="user-teaser-photo">
                          <img src="@/assets/img/IMG_2472_0.jpg" class="img-responsive" />
                      </div>
                      <div class="user-teaser-name">{{ title1 }}</div>
                      <div class="user-teaser-post">{{ text1 }}</div>
                  </div>
              </div>
              <div class="col-6 col-sm-4">
                  <div class="user-teaser">
                      <div class="user-teaser-photo">
                          <img src="@/assets/img/IMG_2539_0.jpg" class="img-responsive" />
                      </div>
                      <div class="user-teaser-name">{{ title2 }}</div>
                      <div class="user-teaser-post">{{ text2 }}</div>
                  </div>
              </div>
              <div class="col-6 col-sm-4">
                  <div class="user-teaser">
                      <div class="user-teaser-photo">
                          <img src="@/assets/img/IMG_2474_1.jpg" class="img-responsive" />
                      </div>
                      <div class="user-teaser-name">{{ title3 }}</div>
                      <div class="user-teaser-post">{{ text3 }}</div>
                  </div></div>
              <div class="col-6 col-sm-4">
                  <div class="user-teaser">
                      <div class="user-teaser-photo">
                          <img src="@/assets/img/IMG_2522_0.jpg" class="img-responsive" />
                      </div>
                      <div class="user-teaser-name">{{ title4 }}</div>
                      <div class="user-teaser-post">{{ text4 }}</div>
                  </div>
              </div>
              <div class="col-6 col-sm-4">
                  <div class="user-teaser">
                      <div class="user-teaser-photo">
                          <img src="@/assets/img/IMG_9971_16.jpg" class="img-responsive" />
                      </div>
                      <div class="user-teaser-name">{{ title5 }}</div>
                      <div class="user-teaser-post">{{ text5 }}
                      </div>
                  </div></div>
</template>
<style>.user-teaser-post{white-space: pre-line;}</style>
