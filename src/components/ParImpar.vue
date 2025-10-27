<template>
        <h1>Par Impar</h1>
        <h2 v-if="numero % 2 == 0" style="color:green">Par</h2>
        <h2 v-else style="color:fuchsia">Impar</h2>
        <label style="color:red">Introduce numero</label>
        <input v-model="numero"/>
        <button @click="numeroAleatorio()">
            Random
        </button>
</template>

<script>
   export default {
    name: "ParImpar",
    data(){
        return{
            numero: 0
        }
    },
    methods:{
        numeroAleatorio(){
            this.numero = Math.floor(Math.random()*100) +1
        }
    }

   }
</script>

<style>

</style>