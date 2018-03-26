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
    {path:'/', component: Users},
    {path: '/test', component: Test},
    {path:'/simpleaudio', component: SimpleAudio},
    {path:'/youtube', component:youtubeembed}
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
        <li><router-link to="/"><a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Users</a></router-link></li>
        <li><router-link to="/test"><a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Test</a></router-link></li>
        <li><router-link to="/simpleaudio"><a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">SimpleAudio</a></router-link></li>
        <li><router-link to="/youtube"><a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Youtube Player</a></router-link></li>
      </ul>
    </div>
    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
      <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
      <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
      <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
    </div>

    <router-view></router-view>
  </div>
  `
}).$mount("#app");
