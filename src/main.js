import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PhosphorIcons from "@phosphor-icons/vue"

let app = createApp(App)

app.use(PhosphorIcons)

app.mount('#app')

