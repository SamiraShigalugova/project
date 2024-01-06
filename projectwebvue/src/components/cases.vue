<script setup>
defineProps({
    title:String,
    text:String,
    date: String
})
</script>

<template>
    <article role="article" about="#" class="blog keys-1">
                  <div class="keys-wrapper">
                      <div class="keys-header">
                          <h2>
                              <a class="link" href="#"><span>{{ title }}</span></a>
                          </h2>
                          <div class="keys-date">{{ date }}</div>
                      </div>
                      <div class="keys-content">
                          <div
                              class="field field--name-body  field--label-hidden field--item">
                              <p>{{ text }}</p>
                          </div>
                      </div>
                  </div>
              </article>
            
              <article role="article" about="#" class="blog keys-2">
    <div class="keys-wrapper2">
        <div class="keys-header">
            <h2>
                <a class="link" href="#"><span>{{ title }}</span>
                </a>
            </h2>
        </div>
    </div>
</article>
<article role="article" about="#"
    class="blog is-promoted keys-1">
    <div class="keys-wrapper-prom1">
        <div class="keys-header">
            <h2>
                <a class="link" href="#"><span>{{ title }}</span></a>
            </h2>
            <div class="keys-date">{{ date }}</div>
        </div>
    </div></article>
    <article role="article" about="#" class="blog is-promoted keys-1">
                  <div class="keys-wrapper4">
                      <div class="keys-header">
                          <h2>
                              <a class="link" href="#"><span>{{ title }}</span></a>
                          </h2>
                          <div class="keys-date">{{ date }}</div>
                      </div>
                  </div>
              </article>

              <article role="article" about="#" class="blog is-promoted keys-1 clearfix">
                  <div class="keys-wrapper">
                      <div class="keys-header">
                          <h2>
                              <a class="link" href="#"><span>{{ title }}</span>
                              </a>
                          </h2>
                          <div class="keys-date">
                              {{ date }}
                          </div>
                      </div>
                      <div class="keys-content">
                          <div
                              class="field field--name-body  field--label-hidden field--item">
                              <p>{{ text }}</p>
                          </div>
                      </div>
                  </div>
              </article>
              <article role="article" about="#" class="blog keys-2">
    <div class="keys-wrapper2">
        <div class="keys-header">
            <h2>
                <a class="link" href="#"><span>{{ title }}</span>
                </a>
            </h2>
        </div>
    </div>
</article>
<article role="article" about="#"
    class="blog is-promoted keys-1">
    <div class="keys-wrapper-prom1">
        <div class="keys-header">
            <h2>
                <a class="link" href="#"><span>{{ title }}</span></a>
            </h2>
            <div class="keys-date">{{ date }}</div>
        </div>
    </div></article>
</template>
