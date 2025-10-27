<template>
  <div>
    <ul id="menu">
      <li><router-link to="/">Home</router-link> |</li>

      <li><router-link to="/cine">Cine</router-link> |</li>

      <li>
        <router-link to="/musica">Música</router-link>
      </li>

         <li>
        <router-link to="/ciclovida">Ciclo Vida</router-link>
      </li>
      
        <li>
        <router-link to="/directivas">Directivas</router-link>
      </li>
       <li>
        <router-link to="/parimpar">ParImpar</router-link>
      </li>
      <li>
        <router-link to="/propiedad">Propiedad Conmutada</router-link>
      </li>
      <li>
        <router-link to="/metodos">Metodos Filters</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
ul#menu li {
  display: inline;
}
</style>
