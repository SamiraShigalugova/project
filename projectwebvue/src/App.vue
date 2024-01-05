<script setup>
import FirstCol from './components/FirstCol.vue'
import SecondCol from './components/SecondCol.vue'
import SupBody from './components/SupBody.vue'
</script>

<template>
  <header>
  <nav class="navbar navbar-dark navbar-expand-lg">
    <div class="container col-lg-12 col-md-12">
      <a class="navbar-brand" href="#"><img src="./assets/img/drupal-coder.svg" width="137" height="20" alt="logo"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDarkDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">ПОДДЕРЖКА DRUPAL</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              АДМИНИСТРИРОВАНИЕ
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a class="dropdown-item" href="#">МИГРАЦИЯ</a></li>
              <li><a class="dropdown-item" href="#">БЭКАПЫ</a></li>
              <li><a class="dropdown-item" href="#">АУДИТ БЕЗОПАСНОСТИ</a></li>
              <li><a class="dropdown-item" href="#">ОПТИМИЗАЦИЯ СКОРОСТИ</a></li>
              <li><a class="dropdown-item" href="#">ПЕРЕЕЗД НА HTTPS</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ПРОДВИЖЕНИЕ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">РЕКЛАМА</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              О НАС
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a class="dropdown-item" href="#">КОМАНДА</a></li>
              <li><a class="dropdown-item" href="#">DRUPALGIVE</a></li>
              <li><a class="dropdown-item" href="#">БЛОГ</a></li>
              <li><a class="dropdown-item" href="#">КУРСЫ DRUPAL</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">ПРОЕКТЫ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">КОНТАКТЫ</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div>
    <div class="block-main">
      <div class="block-main-background">
        <video playsinline autoplay="autoplay" loop="" class="fillWidth" preload="auto" muted >
          <source type="video/mp4" src="./assets/img/video.mp4">
        </video>
      </div>
      <div class="container col-lg-10">
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <h1 class="page-title">Поддержка <br> сайтов на Drupal</h1>
                <div class="support-main-description">
                    Сопровождение и поддержка сайтов <br>
                    на CMS Drupal любых версий и запущенности
                </div>
                <div class="block-main-wrapper">
                    <a href="#" class="block-main-btn">Тарифы</a>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-4">
                <div class="row support-achievements">
                    <div class="col-md-4 col-sm-2 col-5 support-achievement">
                        <div class="support-achievement-wrapper">
                            <div class="support-achievement-title">#1 <img src="./assets/img/cup.png"></div>
                            <div class="support-achievement-description">
                                Drupal-разработчик <br> в России по версии <br> Рейтинга Рунета
                            </div>
                        </div>
                    </div>
                    <FirstCol title="3+" text="средний опыт специалистов более 3 лет"/>
                    <FirstCol title="14" text="лет опыта в сфере Drupal"/>
                    <FirstCol title="200+" text="модулей и тем в формате DrupalGive"/>
                    <FirstCol title="35 000" text="часов поддержки сайтов на Drupal"/>
                    <FirstCol title="200+" text="Проектов на поддержке"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</header>
  <div class="container2 col-lg-12 col-md-10 col-sm-12">
    <div class="col-lg-6 col-md-12 col-sm-12 col-12">
      <h1 class="page-title1">13 лет совершенствуем компетенции в Drupal поддержке!</h1>
      <div class="competency-main-description">
        Разрабатываем и оптимизируем модули, расширяем функциональность сайтов, обновляем дизайн
      </div>
    </div>
    <div class="row col-lg-12 col-md-12 col-sm-12 col-12">
      <div class="col-lg-3 col-md-4 col-sm-2 col-6 competency-achievement">
        <div class="competency-achievement-wrapper"><img src="./assets/img/competency-1.svg"></div>
        <div class="competency-achievement-description">
          Добавление информации на сайт, создание новых разделов
        </div>
      </div>
        <div class="col-lg-3 col-md-4 col-6 competency-achievement">
          <div class="competency-achievement-wrapper"><img src="./assets/img/competency-2.svg"></div>
              <div class="competency-achievement-description">
                Разработка и оптимизация модулей сайта
              </div>
        </div>

        <div class="col-lg-3 col-md-4 col-6 competency-achievement">
          <div class="competency-achievement-wrapper"><img src="./assets/img/competency-3.svg"></div>
              <div class="competency-achievement-description">
                Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами
              </div>
        </div>

        <div class="col-lg-3 col-md-4 col-6 competency-achievement">
          <div class="competency-achievement-wrapper"><img src="./assets/img/competency-4.svg"></div>
              <div class="competency-achievement-description">
                Любые доработки функционала и дизайна
              </div>
        </div>

        <div class="col-lg-3 col-md-4 col-6 competency-achievement">
          <div class="competency-achievement-wrapper"><img src="./assets/img/competency-5.svg"></div>
              <div class="competency-achievement-description">
                Аудит и мониторинг безопасности Drupal сайтов
              </div>
        </div>

        <div class="col-lg-3 col-md-4 col-6 competency-achievement">
          <div class="competency-achievement-wrapper"><img src="./assets/img/competency-6.svg"></div>
              <div class="competency-achievement-description">
                Миграция, импорт контента и апгрейд Drupal
              </div>
        </div>

        <div class="col-lg-3 col-md-4 col-6 competency-achievement">
          <div class="competency-achievement-wrapper"><img src="./assets/img/competency-7.svg"></div>
              <div class="competency-achievement-description">
                Оптимизация и ускорение Drupal-сайтов
              </div>
        </div>

        <div class="col-lg-3 col-md-4 col-5 competency-achievement">
          <div class="competency-achievement-wrapper"><img src="./assets/img/competency-8.svg"></div>
              <div class="competency-achievement-description">
                Оптимизация и ускорение Drupal-сайтов
              </div>
        </div>
      </div>
  </div>

  <div class="advantages with-expertise">
    <div class="container3 col-lg-12 col-md-12 col-sm-12">
      <div class="row col-lg-12 col-md-12 col-sm-12 col-12">
        <center><h1 class="page-title">Поддержка <br>от Drupal-coder</h1></center>
      </div>
      <div class="row col-lg-12 col-md-12 col-sm-12 col-12 advantages-row">
        <div class="col-lg-3 col-md-12 col-sm-6 col-12 cards">
          <div class="sup mx-0">
            <SupBody title="01" text0="Постановка задачи по Email" text="Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда не теряются."/>
            <img src="./assets/img/support1.svg" width="70" height="70" class="p3icons">
          </div>
        </div>

        <div class="col-lg-3 col-md-12 col-sm-6 col-12 cards">
          <div class="sup mx-0">
            <SupBody title="02" text0="Система Helpdesk – отчетность, прозрачность" text="Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер."/>
            <div class="p3icons"> <img src="./assets/img/support2.svg" width="70" height="70"></div>
          </div>
        </div>

        <div class="col-lg-3 col-md-12 col-sm-6 col-12 cards">
          <div class="sup mx-0">
            <SupBody title="03" text0="Расширенная техническая поддержка" text="Возможность организации расширенной техподдержки с 6:00 до 22:00 без выходных."/>
            <div class="p3icons"> <img src="./assets/img/support3.svg" width="70" height="70" class="p3icons"></div>
          </div>
        </div>

        <div class="col-lg-3 col-md-12 col-sm-6 col-12 cards">
          <div class="sup mx-0">
            <SupBody title="04" text0="Персональный менеджер проекта" text="Ваш менеджер проекта всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые вопросы."/>
            <div class="p3icons"> <img src="./assets/img/support4.svg" width="70" height="70" class="p3icons"></div>
          </div>
        </div>

        <div class="col-lg-3 col-md-12 col-sm-6 col-12 cards">
          <div class="sup mx-0">
            <SupBody title="05" text0="Удобные способы оплаты" text="ВБезналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal."/>
            <div class="p3icons"> <img src="./assets/img/support5.svg" width="70" height="70" class="p3icons"></div>
          </div>
        </div>

        <div class="col-lg-3 col-md-12 col-sm-6 col-12 cards">
          <div class="sup mx-0">
            <SupBody title="06" text0="Работаем с SLA и NDA" text="Работа в рамках соглашений о конфиденциальности и об уровне качетсва работ."/>
            <div class="p3icons"> <img src="./assets/img/support6.svg" width="70" height="70" class="p3icons"></div>
          </div>
        </div>

        <div class="col-lg-3 col-md-12 col-sm-6 col-12 cards">
          <div class="sup mx-0">
            <SupBody title="07" text0="Штатные специалисты" text="Надежные штатные специалисты, никаких фрилансеров.."/>
            <div class="p3icons"> <img src="./assets/img/support7.svg" width="70" height="70" class="p3icons"></div>
          </div>
        </div>

        <div class="col-lg-3 col-md-12 col-sm-6 col-12 cards">
          <div class="sup mx-0">
            <SupBody title="08" text0="Удобные каналы связи" text="Консультации по телефону, скайпу, в месенджерах."/>
            <div class="p3icons"> <img src="./assets/img/support8.svg" width="70" height="70" class="p3icons"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="expertise">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 col-xs-12 col-md-12">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <h2 class="block-title">Экспертиза в Drupal,<br> опыт 14 лет!</h2>
                    </div>
                </div>
                <div class="row row-flex expertise-row col-md-12">
                  <SecondCol text="Только системный подход – контроль версий, резервирование и
                  тестирование!"/>
                  <SecondCol text="Учавствуем в разработке ядра Drupal и модулей на Drupal.org, разрабатываем свои модули Drupal"/>
                  <SecondCol text="Только Drupal сайты, не берем на поддержку сайты на других
                  CMS!"/>
                  <SecondCol text="Поддерживаем сайты на Drupal 5,6,7 и 8"/>
                </div>
            </div>
        </div>
    </div>
    <div class="expertise-img"><img class="img-responsive" src="./assets/img/laptop.png"></div>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
@media (min-width:1024px) {
  .navbar{
    background-color: black;
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
  font-family: 'Montserrat', sans-serif;
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
