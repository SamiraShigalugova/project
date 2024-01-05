<script setup>
import TheNavbar from './components/TheNavbar.vue'
</script>

<template>
  <header>
    <TheNavbar/>
  </header>
  <p>vgvgvgh</p>
  <h1>ghh</h1>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
@media (min-width:1024px) {
  .navbar{
    background-color: transparent;
  }
  .block-main {
    padding-top: 150px;
    margin-top: 0px;
  }
  .competency-achievements{
    margin-top: 20px;
  }
  .container2{
    margin-left: 40px;
  }
  .container3 h1{
    font-size: 36px;
    text-align: center;
    font-weight: bold;
  }
  .container3{
    margin-top: 50px;
  }
  .expertise{
    padding-left: 550px;
    padding-top: 380px;
  }
  .expertise img{
    width: 70%;
  }
  .expertise h2{
    margin-bottom: 65px;
  }
  .expertise-row {
    margin-bottom: 0;
  }
}
@media (max-width:991px) {
  .navbar{
    background-color: black;
  }
  .block-main h1 {
    font-size: 42px;
    line-height: 1.2;
    text-align: center;
  }
  .block-main-btn {
    margin-bottom: 80px;
  }
  .support-main-description {
    font-size: 14px;
    text-align: center;
  }
  .support-achievement {
    margin-bottom: 30px;
  }
  .support-achievement-wrapper {
    width: 160px;
    min-width: 100%;
  }
  .block-main-wrapper {
    text-align: center;
  }
  .container2{
    margin-left: 40px;
  }
  .container3{
    margin-top: 50px;
  }
  .container3 h1{
    font-size: 36px;
    text-align: center;
    font-weight: bold;
  }
  .expertise {
    padding-top: 300px;
    padding-left: 320px;
  }
  .expertise img {
    width: 50%;
  }
  .expertise h2 {
    font-size: 32px;
    margin-bottom: 30px;
  }
}
@media (max-width:767px) {
  .navbar{
    background-color: black;
  }
  .block-main h1 {
    font-size: 36px;
    line-height: 1.2;
    text-align: center;
  }
  .block-main-wrapper {
    text-align: center;
  }
  .block-main-btn {
    margin-bottom: 55px;
  }
  .support-main-description {
    font-size: 14px;
    text-align: center;
  }
  .container2{
    margin-left: 20px;
  }
  .container2 h1{
    font-size: 20px;
  }
  .competency-achievements{
    margin-top: 20px;
  }
  .container3{
    margin-top: 50px;
  }
  .container3 h1{
    font-size: 36px;
    text-align: center;
    font-weight: bold;
  }
  .expertise h2 {
    font-size: 24px;
    margin-bottom: 20px;
    margin-top: initial;
  }
  .expertise img {
    width: 85%;
  }
  .expertise{
    padding-left: 0;
    padding-top: 250px;
    padding-bottom: 250px;
  }
}
@media (min-width:414px) and (max-width:540px){
  .expertise h2 {
    font-size: 24px;
    margin-bottom: 20px;
    margin-top: initial;
  }
  .expertise img {
    width: 75%;
  }
  .expertise{
    padding-left: 0;
    padding-top: 250px;
    padding-bottom: 250px;
  }
  .expertise-row{
    margin-bottom: 20px;
  }
}
@media (min-width:280px) and (max-width:414px) {
  .expertise h2 {
    font-size: 24px;
    margin-bottom: 20px;
    margin-top: initial;
  }
  .expertise img {
    width: 90%;
  }
  .expertise{
    padding-left: 0;
    padding-top: 250px;
    padding-bottom: 250px;
  }
}
body{
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
}
header {
  font-size: 12px;
  width: 100%;
  overflow: hidden;
}
video {
  display: inline-block;
  vertical-align: baseline;
}
.navbar{
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
}
.block-main {
  overflow: hidden;
  position: relative;
  padding: 130px 0 60px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
}
.block-main-background video {
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 5;
  filter: brightness(40%);
}
.block-main .container {
  position: relative;
  z-index: 15;
}
.block-main h1 {
  font-size: 36px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 20px;
}
.block-main-btn {
  display: inline-block;
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 1;
  color: #fff;
  text-decoration: none;
  padding: 22px 20px;
  width: 220px;
  max-width: 100%;
  text-align: center;
  border: 2px solid #f14d34;
  border-radius: 5px;
  transition: background 300ms;
  margin-bottom: 45px;
}
.block-main-btn:focus, .block-main-btn:hover, .block-main-btn:active {
  background: #f14d34;
  text-decoration: none;
  color: #fff;
}
.support-main-description {
  font-size: 14px;
  line-height: 1.6;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 50px;
}
.support-achievements {
  margin-top: 10px;
}
.support-achievement {
  margin-bottom: 40px;
}
.support-achievement-wrapper {
  border-left: 3px solid #f14d34;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 10px;
  min-height: 80px;
  height: 100%;
}
.support-achievement-description {
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  color: rgba(255, 255, 255, 0.7);
}
.support-achievement-title {
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 5px;
  position: relative;
}
.support-achievement-title img {
  vertical-align: baseline;
  position: absolute;
  left: 55px;
  top: -16px;
}
.support-achievement:first-of-type .support-achievement-title {
  font-size: 48px;
  margin-top: -22px;
}
.container2{
  color: black;
  margin-top: 50px;
}
.container2 h1{
  font-size: 30px;
  font-weight: bold;
}
.container3 h1{
  margin-bottom: 55px;
  text-align: center;
  color: #050c33;
  font-weight: bold;
  font-size: 42px;
}
.sup{
  background: #fff;
  border-radius: 5px;
  box-shadow: 20px 20px 40px rgba(5, 12, 51, 0.05);
  margin-left: -12px;
  margin-right: -12px;
  height: 100%;
  position: relative;
  padding: 25px 25px 45px;
  min-height: 292px;
}
.advantages-row {
  padding: 0 12px;
  position: relative;
  z-index: 20;
}
.with-expertise .advantages-row {
  margin-bottom: -212px;
}
.sup-text{
  font-size: 14px;
  opacity: 80%;
}
.sup-title{
  font-size: 16px;
  font-weight: 600;
}
.p3icons{
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 5;
}
.sup-body{
  position: relative;
  z-index: 10;
  font-weight: 500;
  font-size: 16px;
  color: #4e5a73;
  line-height: 1.37;
}
.expertise {
  position: relative;
  background: linear-gradient(254.72deg, rgba(255, 255, 255, 0.276) -114.85%, rgba(255, 255, 255, 0) 69.04%), #040613;
  color: #fff;
}
.expertise .container {
  position: relative;
  z-index: 15;
}
.expertise h2 {
  font-weight: bold;
  font-size: 36px;
}
.expertise-img {
  padding: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
  max-width: 735px;
}
.expertise-img img {
  height: auto;
  transform: translateY(20%);
}
.expertise-col {
  margin-bottom: 20px;
}
.expertise-item-body {
  border-left: 3px solid #f14d34;
  padding-left: 15px;
  padding-top: 5px;
  min-height: 88px;
  height: 100%;
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  width: 260px;
  max-width: 100%;
}
</style>
