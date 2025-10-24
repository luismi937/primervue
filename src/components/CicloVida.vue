<template>
    <div>
        <h1>Ciclo de vida y metodos VUE</h1>
        <h2 style= "color:red">{{mensaje}}</h2>
        <button @click = "cambiarMensaje()">
            Mostrar mensaje
        </button>
    </div>
</template>

<script>

export default ({
   name: "CicloVida",
   data(){
    return {
        mensaje: "Hoy es viernes"
    }
   },
   methods:{
    //aqui iniciamos nuestrps metodos personalizados
    cambiarMensaje(){
        //para acceder a las variables de data () del componentt debemos usar la palabra this
        this.mensaje = "hoy se sale"
    }
   },
   mounted(){
    console.log("Component mounted")
   },
   created(){
    console.log("Component created")
   },
   updated(){
    console.log("component updated")
   },
   unmounted(){
    console.log("component unmouted")
   }
})
</script>

<style>
    @import './CicloVida.vue';
</style>
