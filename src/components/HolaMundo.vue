<template>

    <div>
        <h1>Mi primer vue de viernes, que ilusion!!!</h1>
        <img src="./../assets/imagenes/julianalvarez.jpg"/>
        <h2>Su nombre es:{{nombre}}</h2>
        <h3>Y tiene {{edad}} años</h3>
    </div>
    
</template>

<script>

    //vue usa codigo js especial cada component que generemos debe tener un nombre obligatorio 
    // y debemos exportarlo con el mismo nombre, el name es la etiqueta que usan otros componentes para dibujar
    export default{
        name: "HolaMundo",
        data () {
            return{
            //las variables son declarads en formato json dentro de un return
            nombre: "Alumno",
            edad:"25",
            miArray: [],
            objeto: {},
        }
        }
        }
</script>

<style >
    h1 {color: green}
    @import './../assets/css/esilos.css';
</style>