import HomeComponent from './components/HomeComponent.vue';
import CineComponent from './components/CineComponent.vue';
import MusicaComponent from './components/MusicaComponent.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CicloVida from './components/CicloVida.vue'

//neceesitamos un array con las rutas de navegacion

const myRoutes = [
    {path: "/", component: HomeComponent},
    {path: "/cine", component: CineComponent},
    {path: "/musica", component: MusicaComponent},
    {path: "/cliclovida", component: CicloVida}

]
//creamos una variable para el router indicando el tipo de navegacion y las rutas 
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//la constante router es la que se usara en el fichero main.js debemos exportarla para que sea usada

export default router;