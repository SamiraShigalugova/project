<script setup>
import FirstCol from './components/FirstCol.vue'
import SecondCol from './components/SecondCol.vue'
import SupBody from './components/SupBody.vue'
import tar1 from './components/tar1.vue'
import tar2 from './components/tar2.vue'
import comp1 from './components/comp1.vue'
import comp2 from './components/comp2.vue'
import comp3 from './components/comp3.vue'
import team1 from './components/team1.vue'
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
<section id="block-tariffs">
  <h2 class="block-title">Тарифы</h2>
      <div class="tariffs">
          <div class="container">
              <div class="tar">
                  <tar1 title="Стартовый" text1="Консультации и работы по SEO" 
                  text2="Услуги дизайнера" 
                  text3="Неиспользованные оплаченные часы переносятся на следующий месяц" 
                  text4="Предоплтата от 6 000 рублей в месяц"
                  textb="Свяжитесь с нами!"></tar1>
                  <tar2 title="Бизнес" text1="Консультации и работы по SEO" 
                  text2="Услуги дизайнера" 
                  text3="Высокое время реакции - до 2 рабочих дней" 
                  text4="Неиспользованные оплаченные часы не переносятся"
                  text5="Предоплтата от 30 000 рублей в месяц"
                  textb="Свяжитесь с нами!"></tar2>
                  <tar2 title="VIP" text1="Консультации и работы по SEO" 
                  text2="Услуги дизайнера" 
                  text3="Максимальное время реакции - в день обращения" 
                  text4="Неиспользованные оплаченные часы не переносятся"
                  text5="Предоплтата от 270 000 рублей в месяц"
                  textb="Свяжитесь с нами!"></tar2>
                </div>
                </div>
                  <div class="col-xs-12">
                      <div class="tariffs-ps">
                          Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные
                          условия!
                          <a href="#" class="tariffs-link">Получить индивидуальный тариф</a>
                      </div>
                  </div>
                </div>
</section>
  <!-- Блок команда -->
<section id="block-2">
  <div class="container">
      <div class="row">
          <div class="col-md-12">
              <h2 class="block-title" >Наши профессиональные разработчики<br>выполняют быстро любые задачи </h2>
          </div>
      </div>
      <div class="row row-flex competencies-row">
        <comp1 title="От 1ч" text="Настройка события СА в интернет-магазине"></comp1>
        <comp2 title="От 20ч" text="Разработка мобильной версии сайта"></comp2>
        <comp3 title="От 8ч" text="Интеграция модуля оплаты"></comp3>
      </div>
  </div>



  <div class="container">
  <h2 class="block-title-team">Команда</h2>
  <div class="form-group">
      <div class="row">
        <team1 title1="Сергей Синица" text1="Руководитель отдела веб-разработки, 
        канд. техн. наук, заместитель директора"
        title2="Роман Агабеков" text2="Руководитель отдела DevOPS, директор"
        title3="Алексей Синица" text3="Руководитель отдела поддержки сайтов"
        title4="Дарья Бочкарёва" text4="Руководитель отдела продвижения, контекстной рекламы и контент-поддержки сайтов"
        title5="Ирина Торкунова" text5="Менеджер по работе с клиентами"></team1>
              <!-- <div class="col-6 col-sm-4">
                  <div class="user-teaser">
                      <div class="user-teaser-photo">
                          <img src="img/IMG_2539_0.jpg" class="img-responsive" />
                      </div>
                      <div class="user-teaser-name">Роман Агабеков</div>
                      <div class="user-teaser-post">Руководитель отдела DevOPS,<br> директор</div>
                  </div>
              </div>
              <div class="col-6 col-sm-4">
                  <div class="user-teaser">
                      <div class="user-teaser-photo">
                          <img src="img/IMG_2474_1.jpg" class="img-responsive" />
                      </div>
                      <div class="user-teaser-name">Алексей Синица</div>
                      <div class="user-teaser-post">Руководитель отдела<br> поддержки сайтов</div>
                  </div></div>
              <div class="col-6 col-sm-4">
                  <div class="user-teaser">
                      <div class="user-teaser-photo">
                          <img src="img/IMG_2522_0.jpg" class="img-responsive" />
                      </div>
                      <div class="user-teaser-name">Дарья Бочкарёва</div>
                      <div class="user-teaser-post">Руководитель отдела<br>продвижения, контекстной<br>рекламы и контент-поддержки<br>сайтов</div>
                  </div>
              </div>
              <div class="col-6 col-sm-4">
                  <div class="user-teaser">
                      <div class="user-teaser-photo">
                          <img src="img/IMG_9971_16.jpg" class="img-responsive" />
                      </div>
                      <div class="user-teaser-name">Ирина Торкунова</div>
                      <div class="user-teaser-post">Менеджер по работе с<br>клиентами
                      </div>
                  </div></div> -->
              </div>
          </div>
          <button class="btn-team">ВСЯ КОМАНДА</button>
  </div>
</section>
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
@keyframes slideup {
  from {
    transform: translateY(20%);
  }
  to {
    transform: translateY(0);
  }
}
.dropdown-menu {
  animation: 1s slideup;
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

@media (max-width: 1092px) {
  #block-tariffs .block-title {
    font-size: 35px;
    text-align: center;
    font-weight: bold;
  }
  
  section {
    display: block;
  }
  
  .tar{display: flex; flex-direction: column;}

  h2.block-title {
    font-family: inherit;
    line-height: 1.1;
    color: inherit;
    margin-top: 22px;
    margin-bottom: 11px;
    font-weight: bold;
  }
  .block-title-team{text-align: center;color: #000000; margin-top: 20px;
  font-weight: bold;
  font-size: 36px;}
  .spisok{list-style: none;padding: 10px; width: 100%;}
.spisok li{
    padding-left: 20px;
    position: relative;
    margin: 15px;
}
.spisok li:before{
    content: '\2713';
    position: absolute; top: 0; left: 0;
    color: orangered;}
    #block-tariffs {
      padding: 60px 0 90px;
      font-family: "Montserrat", sans-serif;
      background: url("./assets/img/D-background.svg") right top, #fff;
      background-size: cover;
    }

    .tariff {
      height: auto;
      border-radius: 5px;
      border: 1px solid #e6e6e6;
      background: #fff;
      position: relative;
      margin-left: auto;
      margin-right: auto;
      transition: all 500ms;
      transform-origin: center;
      margin-bottom: 30px;
      width: 350px;
    }
    .tariff-row {
      display: block;
    }
    .tariff-row.row-flex {
      display: flex;
    }
    .tariffs-row {
      display: block;
    }
    .tariffs-row.row-flex {
      display: flex;
    }
    .tariff-wrapper {
      width: 300px;
      max-width: 100%;
      margin: 0 auto;
      height: 100%;
      position: relative;
      padding-bottom: 80px;
    }
    .tariff-header {
      border-bottom: 2px solid #e5e5e5;
      margin-bottom: 30px;
      margin-top: 30px;
    }
    .tariff-title {
      font-weight: bold;
      font-size: 22px;
      color: #f14d32;
      line-height: 1.3;
    }
    .tar-btn {
      text-decoration: none;
      display: block;
      border-radius: 5px;
      text-transform: uppercase;
      color: #f14d34;
      border: 1px solid #f14d34;
      text-align: center;
      transition: all 500ms;
      padding: 20px 10px;
      line-height: 1;
      font-size: 12px;
      font-weight: 500;
      position: absolute;
      margin-bottom: 20px;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .tariffs-ps {
      text-align: center;
      line-height: 1.3;
      font-weight: 500;
      color: #828a9b;
      /* width: 475px; */
      max-width: 100%;
      margin: 0 auto;
    }
    .tariffs-link {
      display: block;
      margin-top: 26px;
      font-size: 12px;
      text-transform: uppercase;
      color: #050c33;
      text-decoration: underline;
      transition: all 300ms;
    }
    .tariffs-link:hover {
      text-decoration: none;
      color: #f14d32;
    }
    .tariffs-row {
      display: block;
    }
    .tariffs-row.row-flex {
      display: flex;
    }
    #block-2 .block-title{margin-left: 10px;color: #000;
  font-weight: bold;
  font-size: 36px;line-height: 1.3;}
    .row-flex {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      flex-direction: column;
    align-items: center;
    }
    .competency-body{text-align: center;}
    .competency-icon {display: flex;
      position: relative;
      margin-bottom: 10px;
      justify-content: center;
    }
    #block-2 .row{--bs-gutter-x: 0rem;}
    .user-teaser-name {
      font-weight: bold;
      font-size: 14px;
      line-height: 1.37;
      color: #050c33;
      text-decoration: none;
      display: inline-block;
      margin-bottom: 5px;
      margin-top: 10px;
    }
    .user-teaser-post {
      padding: 0;
      color: #3b3131;
      font-weight: 500;
      font-size: 10px;
      line-height: 1.37;
      margin-bottom: 5px;
    }
    .container {
      margin-right: auto;
      margin-left: auto;
      padding-left: 15px;
      padding-right: 15px;
    }.form-group{margin: 20px;display: flex;}
    .img-responsive {
      display: block;
      max-width: 100%;
      height: auto;
    }
    .user-teaser {
      text-align: left;
      margin-bottom: 70px;
      margin: 10px;
    }.btn-team{
      border: 2px solid #696868; 
      background-color: transparent; 
      color: #000; 
      padding: 10px 20px; 
      font-size: 16px; 
      cursor: pointer; 
      margin: 0 auto;
      display: block;
      border-radius: 5px;
  }
  .btn-team:hover {
    background-color: #696868; 
    color: #fff; 
  }
    .blog.keys-1 {
      width: 100%;
      padding: 0 10px;
      float: left;
      margin-bottom: 20px;
      height: 150px;
      font-family: "Montserrat", sans-serif;
      overflow: hidden;
      cursor: pointer;
    }
    .blog.keys-1 .keys-content, .blog.keys-1 .keys-img {
      display: none;
    }
    .inverse .blog.keys-1:nth-child(4n+1) .keys-wrapper {
      background: none !important;
    }
    .inverse .blog.keys-1:nth-child(4n+1) .keys-wrapper:before {
      display: none;
    }
    .inverse .blog.keys-1:nth-child(4n+1) .keys-content, .inverse .blog.keys-1:nth-child(4n+1) .keys-img {
      display: block;
    }
    .inverse .blog.keys-1:nth-child(4n+1) .keys-header {
      margin-top: 40px;
    }
    .inverse .blog.keys-1:nth-child(4n+1) .keys-header h2 a {
      color: #050c33;
    }
    .inverse .blog.keys-1:nth-child(4n+1) .keys-date {
      color: #050c33;
    }
    .blog.keys-2 {
      width: 100%;
      padding: 0 10px;
      float: left;
      margin-bottom: 20px;
      height: 150px;
      font-family: "Montserrat", sans-serif;
      overflow: hidden;
      cursor: pointer;
    }
    .link{text-decoration: none;text-align: start;font-size: 12;}
    
    .keys-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 10px;
      border-radius: 5px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    .keys-wrapper:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0) 55.58%);
      z-index: 5;
      border-radius: 5px;
    }
    .keys-header {
      margin-top: auto;
      position: relative;
      z-index: 10;
    }
    .keys-header h2 {display: flex; justify-content: start;
      font-weight: bold;
      font-size: 18px;
      line-height: 1.25;
      margin-bottom: 5px;
      width: 320px;
      max-width: 100%;
    }
    .keys-header h2 a {
      color: #fff;
    }
    .keys-content {
      position: relative;
      z-index: 10;
      margin-top: 20px;
      font-weight: 500;
      font-size: 14px;
      color: #4e5a73;
    }
    .keys-img {
      position: relative;
      z-index: 10;
      height: 50%;
      background-position: center;
      background-size: cover;
      margin-left: -40px;
      margin-right: -40px;
      margin-top: -40px;
      border-radius: 5px;
      box-sizing: content-box;
    }
    .keys-date {
      color: #fff;
      opacity: 0.5;
      font-size: 12px;
      line-height: 1.25;
    }
    .btn-case{
      border: 2px solid #696868; 
      background-color: transparent; 
      color: #000; 
      padding: 10px 20px; 
      font-size: 16px; 
      cursor: pointer; 
      margin: 0 auto;
      display: block;
      border-radius: 5px;
    }
    .btn-case:hover {
    background-color: #696868; 
    color: #fff; 
    }
    #block-cases .block-title{text-align: center;}
    #block-cases .row{--bs-gutter-x: 4rem;display: flex;justify-content: center;}
}

@media screen and (min-width: 768px){#block-tariffs .tar{display: flex; justify-content: center;align-items: center;}

}
  
@media screen and(min-width:1024px){#block-tariffs .tar{display: flex; justify-content: center;align-items: center;
}}


@media screen and (min-width: 1091px){
  

  #block-2 .row{--bs-gutter-x: 0rem;}

section {
  display: block;
}

.tar{display: flex; justify-content: space-evenly; flex-direction: row;}




* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

h2 {
  font-family: inherit;
  line-height: 1.1;
  color: inherit;
  margin-top: 15px;
  margin-bottom: 11px;
  font-size: 34px;
  text-align: center;
  font-weight: 700;
}

p {
  margin: 0 0 11px;
}
p:last-child {
  margin-bottom: 0;
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}

.form-group{margin: 20px;}
.btn-team{width: 20%;
    border: 2px solid #696868; 
    background-color: transparent; 
    color: #000; 
    padding: 10px 20px; 
    font-size: 16px; 
    cursor: pointer; 
    margin: 0 auto;
    display: block;
    border-radius: 5px;
}
.btn-team:hover {
  background-color: #696868; 
  color: #fff; 
}




.spisok{list-style: none;padding: 10px; width: 100%;}
.spisok li{
    padding-left: 20px;
    position: relative;
    margin: 15px;
}
.spisok li:before{
    content: '\2713';
    position: absolute; top: 0; left: 0;
    color: orangered;}


.clearfix:before, .clearfix:after, .container:before, .container:after, .row:before, .row:after{
  content: " ";
  display: table;
}
.clearfix:after, .container:after, .row:after{
  clear: both;
}

.view-team {
  text-align: center;
}

.row-flex {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 75px;
  justify-content: space-between;
  margin-top: 20px;
}
.row-flex:after, .row-flex:before {
  width: 0;
}

#block-tariffs {
  padding: 60px 0 90px;
  font-family: "Montserrat", sans-serif;
  background: url("./assets/img/D-background.svg") no-repeat right top, #fff;
  background-size: 58%;
}
#block-tariffs .block-title {
  margin-top: 30px;
  margin-bottom: 65px;
  text-align: center;
  color: #000;
  font-weight: bold;
  font-size: 42px;
}
h2.block-title {
    font-family: inherit;
    line-height: 1.1;
    color: inherit;
    margin-top: 22px;
    margin-bottom: 11px;
    font-weight: bold;
  }
  .block-title-team{text-align: center;color: #000000; margin-top: 20px;
  font-weight: bold;
  font-size: 36px;}
  #block-2 .block-title{margin-left: 10px;color: #000;
  font-weight: bold;
  font-size: 36px;line-height: 1.3;}

#block-2 .view-content {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  font-family: "Montserrat", sans-serif;
}
#block-2 .view-content:after, #block-2 .view-content:before {
  width: 0;
}
#block-2 .views-row {
  padding: 0 50px;
}

#block-cases {
  margin-top: 100px;
  font-size: 21px;
}
#block-cases .view-content {
  display: flex;
  flex-wrap: wrap;
}
#block-cases .view-content:after {
  content: "";
  display: table;
  clear: both;
}
#block-cases .block-title {
  font-weight: bold;
  font-size: 42px;
  margin-bottom: 46px;
  margin-top: 0;
  text-align: center;
  color: #050c33;
}


.tariff {
  height: auto;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  background: #fff;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  transition: all 500ms;
  transform-origin: center;
  margin-bottom: 30px;
  width: 350px;
}
.tariff-row {
  display: block;
}
.tariff-row.row-flex {
  display: flex;
}
.tariff-wrapper {
  width: 300px;
  max-width: 100%;
  margin: 0 auto;
  height: 100%;
  position: relative;
  padding-bottom: 80px;
}
.tariff-header {
  border-bottom: 2px solid #e5e5e5;
  margin-bottom: 30px;
  margin-top: 30px;
}
.tariff-title {
  font-weight: bold;
  font-size: 22px;
  font-weight: bold;
  color: #f14d32;
  line-height: 1.3;
}
.tar-btn {
  text-decoration: none;
  display: block;
  border-radius: 5px;
  text-transform: uppercase;
  color: #f14d34;
  border: 1px solid #f14d34;
  text-align: center;
  transition: all 500ms;
  padding: 20px 10px;
  line-height: 1;
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  margin-bottom: 20px;
  left: 0;
  right: 0;
  bottom: 0;
}
.tar-btn:hover, .tar-btn:active, .tar-btn:focus {
  text-decoration: none;
  color: #fff;
  background: #f14d34;
}
.tariff .col-flex:nth-of-type(2n) .tariff {
  transform: scale(1.1);
  z-index: 10;
  box-shadow: 0 4px 60px rgba(162, 162, 162, 0.25);
}
.tariff .col-flex:nth-of-type(2n) .tar-btn {
  color: #fff;
  background: #f14d34;
}
.tariffs .tariff-row:hover .col-flex:nth-of-type(2n) .tariff {
  transform: initial;
  box-shadow: none;
}
.tariffs .tariff-row:hover .col-flex:nth-of-type(2n) .tariff .tar-btn {
  color: #f89c91;
  background: #fff;
}
.tariff:hover, .tariffs .tariff-row:hover .col-flex:nth-of-type(2n) .tariff:hover {
  transform: scale(1.1);
  z-index: 15;
  box-shadow: 0 4px 60px rgba(162, 162, 162, 0.25);
}
.tariff:hover .tar-btn, .tariffs .tariff-row:hover .col-flex:nth-of-type(2n) .tariff:hover .tar-btn {
  color: #fff;
  background: #f14d34;
}
.tariffs-ps {
  text-align: center;
  line-height: 1.3;
  font-weight: 500;
  color: #828a9b;
  /* width: 475px; */
  max-width: 100%;
  margin: 0 auto;
}
.tariffs-link {
  display: block;
  margin-top: 26px;
  font-size: 12px;
  text-transform: uppercase;
  color: #050c33;
  text-decoration: underline;
  transition: all 300ms;
}
.tariffs-link:hover {
  text-decoration: none;
  color: #f14d32;
}
.tariffs-row {
  display: block;
}
.tariffs-row.row-flex {
  display: flex;
}


.user-teaser {
  text-align: left;
  margin-bottom: 70px;
}
.user-teaser-photo {
  border-radius: 0;
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 25px;
}
.user-teaser-name {
  font-weight: bold;
  font-size: 18px;
  line-height: 1.37;
  color: #050c33;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 5px;
}
.user-teaser-post {
  padding: 0;
  color: #505570;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;
  margin-bottom: 5px;
}

.blog.keys-1 {
  width: 33.333333%;
  padding: 0 10px;
  float: left;
  margin-bottom: 20px;
  min-height: 475px;
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
  cursor: pointer;
}
.blog.keys-1 .keys-content, .blog.keys-1 .keys-img {
  display: none;
}
.inverse .blog.keys-1:nth-child(4n+1) .keys-wrapper {
  background: none !important;
}
.inverse .blog.keys-1:nth-child(4n+1) .keys-wrapper:before {
  display: none;
}
.inverse .blog.keys-1:nth-child(4n+1) .keys-content, .inverse .blog.keys-1:nth-child(4n+1) .keys-img {
  display: block;
}
.inverse .blog.keys-1:nth-child(4n+1) .keys-header {
  margin-top: 40px;
}
.inverse .blog.keys-1:nth-child(4n+1) .keys-header h2 a {
  color: #050c33;
}
.inverse .blog.keys-1:nth-child(4n+1) .keys-date {
  color: #050c33;
}
.blog.keys-2 {
  width: 66.66666667%;
  padding: 0 10px;
  float: left;
  margin-bottom: 20px;
  min-height: 475px;
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
  cursor: pointer;
}
.link{text-decoration: none;text-align: start;}

.keys-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 40px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.keys-wrapper:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(360deg, rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0) 55.58%);
  z-index: 5;
  border-radius: 5px;
}
.keys-header {
  margin-top: auto;
  position: relative;
  z-index: 10;
}
.keys-header h2 {display: flex; justify-content: start;
  font-weight: bold;
  font-size: 18px;
  line-height: 1.25;
  margin-bottom: 5px;
  width: 320px;
  max-width: 100%;
}
.keys-header h2 a {
  color: #fff;
}
.keys-content {
  position: relative;
  z-index: 10;
  margin-top: 20px;
  font-weight: 500;
  font-size: 14px;
  color: #4e5a73;
}
.keys-img {
  position: relative;
  z-index: 10;
  height: 50%;
  background-position: center;
  background-size: cover;
  margin-left: -40px;
  margin-right: -40px;
  margin-top: -40px;
  border-radius: 5px;
  box-sizing: content-box;
}
.keys-date {
  color: #fff;
  opacity: 0.5;
  font-size: 12px;
  line-height: 1.25;
}
.btn-case{width: 20%;
  border: 2px solid #696868; 
  background-color: transparent; 
  color: #000; 
  padding: 10px 20px; 
  font-size: 16px; 
  cursor: pointer; 
  margin: 0 auto;
  display: block;
  border-radius: 5px;
}
.btn-case:hover {
background-color: #696868; 
color: #fff; 
}
}
</style>
