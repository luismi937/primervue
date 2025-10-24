<template>
    <div>
        <h1>Ejemplo Directivas</h1>
        <h3>{{$data}}</h3>
        <label>Introduzca Serie</label>
        <input type="text" v-model="serieNueva"/>
        <button @click="nuevaSerie()">
            Nueva Serie???
        </button>
        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie">
                {{serie}}

            </li>
        </ul>
        <label>Introduzca un numero</label>
        <input type="number" v-model="numero"/>
        <h3 v-if="numero >0">Positivo</h3>
        <h3 v-else-if="numero<0 " style="color:red">Negativo</h3>
        <h3 v-else style="color:red">CERO</h3>
    </div>
</template>

<script>
    export default{
        name:"DirectivasComponent",
        data(){
            return{
                series: ["hijos de la anarquia", "suits", "la que se avecina", "el principe de bel air"],
                numero: 0,
                nombre: "Alumno",
                serieNueva: ""
            }
        },
        methods:{
            nuevaSerie(){
                this.series.push(this.serieNueva);
            }
        }
    }
</script>

<style>

</style>