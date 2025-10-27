<template>
   <div>
    <h1>Metodos Filters</h1>
    <ul>
        <li v-for="num in numeros" :key="num">
            numero:{{ num }}
            Doble: {{ $filters.getNumeroDoble(num) }}
        </li>
    </ul>
    <ul>
        <li v-for="name in nombres" :key="name">
            {{$filters.mayuscula(name)}}
        </li>
    </ul>
   </div> 
</template>
<script>
export default {
    name: "metodosFilters",
    data(){
        return{
            numeros: [55,21,33, 44,28, 88],
            nombres:["Lucia", "Diana", "Antonia", "Carlos"]
        }
    }
}
</script>
<style>

</style>