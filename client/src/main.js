import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '/src/assets/main.css';
import '/src/assets/responsiveness.css';

const app = createApp(App);
app.use(router);
app.use(store);

app.mount('#app')
