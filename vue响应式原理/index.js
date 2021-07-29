import Vue from './vue.js'



let vm = new Vue({
  el: '#app',
  data: {
    msg: 'Hello Vue',
    count: 100,
    myHtml: '<ul><li>这是v-html编译的</li></ul>',
  },
  methods: {
    eat() {
      console.log('我爱吃汉堡');
    },
    handler() {
      alert('handler')
    }
  },
})
console.log(vm);