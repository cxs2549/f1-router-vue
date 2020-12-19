import { createApp } from 'vue'
// import "./assets/css/app.scss"
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App).use(store).use(router)

router.isReady().then(function() {
    app.mount('#app');
  });
