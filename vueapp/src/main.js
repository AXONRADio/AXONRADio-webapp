// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import VueYoutubeEmbed from 'vue-youtube-embed'
import App from './App'

import SimpleAudio from './components/SimpleAudio'
import youtubeembed from './components/YoutubeEmbedded.vue'

Vue.use(vueResource)
Vue.use(VueRouter)
Vue.use(VueYoutubeEmbed)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', component: youtubeembed},
    {path: '/mp3', component: SimpleAudio}
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    Test, App
  },
  router,
  template:'<App></App>'
}).$mount("#app");
