// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import VueYoutubeEmbed from 'vue-youtube-embed'
import App from './App'

import Users from './components/Users'
import Test from './components/Test'
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
  router,
  template: `
  <div id="app">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <ul>
        <li><router-link to="/"><a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a></router-link></li>
        <li><router-link to="/mp3"><a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">MP3 Player</a></router-link></li>
        <li><a href="http://localhost:4000">Login</a></li>
        <li><a href="http://localhost:4000/logout">Logout</a></li>
        <li><a href="http://localhost:4000/profile">My Profile</a></li>
      </ul>
    </div>
    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
      <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
    </div>
    <div>
      <h1>AXONRADiO</h1>
    </div>
    <router-view></router-view>
  </div>
  `
}).$mount("#app");
