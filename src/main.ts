
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vIntersectionObserver } from '@vueuse/components'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('intersection-observer', vIntersectionObserver)
app.mount('#app')
