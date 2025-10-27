<template>
    <div>
        <h1 style="color:green">Propiedad Conmutada</h1>
        <label>Introduzca un numero</label>
        <input type="number" v-model="numero" />
        <div v-html ="evaluarNumero"></div>
        <ul>
            <li v-for="game in juegosRojos" :key="game" v-html="game"></li>
        </ul>
        <ul>
            <li v-for="game in juegos" :key="game" >
                {{ game }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "PropiedadConmutada",
    computed:{
        evaluarNumero() {
            let data = "";
            if(this.numero % 2 == 0){
                data = "<h4 style='color:green'>Par:"+this.numero +"</h4>";
            }else{
                data = "<h4 style='color:red'>impar:"+this.numero +"</h4>";
            }
            return data;
        },
        //se escribe como un metodo pero se usa como una propiedad
        juegosRojos(){
            var datos = this.juegos;
            var i = 0
            for(var game of this.juegos){
                var juegoRojo = "<span style= 'color:red'>"
                    +game+ "</span>";
                    datos [i] =juegoRojo;
                    i++;
            }
            return datos
        }
    },
    data(){
        return{
            numero: 0,
            juegos:["parchis","chinchon","fortnite", "COD", "Fifa"]
        }
    }
}
</script>
<style>

</style>
