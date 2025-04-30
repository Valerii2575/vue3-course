import { createApp } from 'vue'
import App from './App.vue'
import shareds from './shared';

const app = createApp(App);

shareds.forEach(element => {
    app.component(element.name, element);
});

app.mount('#app')
