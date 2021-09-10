import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './router/index'
import store from './store/index'
import Header from './components/header/index.vue'
import './assets/style/base.css'
const app = createApp(App)
app.use(Vant)
app.component('Header', Header)

app.use(router)
app.use(store)
app.mount('#app')