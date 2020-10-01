import Vue from './vue.esm.browser.js';

const app = new Vue({
  el: '#counter',
  data: {
    value: 0,
  },

  methods: {
    onClick() {
      this.value++;
    }
  }
})

// const app = ...
// Рекомендуется использовать МЕТОД в качестве обработчика события
