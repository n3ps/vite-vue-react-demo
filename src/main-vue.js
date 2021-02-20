import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import router from './router'
import store from './store'
import './assets/global.css'

createApp(App)
  .use(store)
  .use(router)
  .mount('#vue-app')

createApp(Header)
  .mount('#header-app')
