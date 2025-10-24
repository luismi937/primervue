<template>
  <!-- <CineComponent />
  <MusicaComponent />
  <HomeComponent /> -->
  <h1>Elemento estatico</h1>
  <MenuComponent />
  <hr/>
  <router-view></router-view>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'
// import CineComponent from './components/CineComponent.vue'
// import HomeComponent from './components/HomeComponent.vue'
// import MusicaComponent from './components/MusicaComponent.vue'
export default {
  name: 'App',
    components: { 
   //  CineComponent, 
   //  HomeComponent, 
  //  MusicaComponent
    MenuComponent
   }
}
</script>

<style>
@import './../src/assets/css/estilos.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
