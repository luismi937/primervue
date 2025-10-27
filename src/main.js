import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app = createApp(App)
app.config.globalProperties.$filters = {
    //creamos 2 metodos que devolveran "algo" y devolveran un resultado
    mayuscula(dato){
        return dato.toUpperCase();
    },
    getNumeroDoble(numero){
        return numero * 2;
    }
}

app.use(router).mount('#app')


