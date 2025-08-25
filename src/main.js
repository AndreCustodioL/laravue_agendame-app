import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import vuetify from './plugins/vuetify';
import pinia from '@/plugins/pinia';
import { useMeStore } from '@/stores/me';
import '@/scss/style.scss';
import '@/plugins/yup';
import '@/plugins/axios';

const app = createApp(App)
app.use(pinia)

const meStore = useMeStore()

meStore.getMe()
.finally(() => {
    app
    .use(router)
    .use(vuetify)
    .mount('#app')
    
})

