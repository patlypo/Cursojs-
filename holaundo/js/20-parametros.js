//parametros REST and SPREAD
function licuadofrutas(fruta1, fruta2, ...resto_defruta){
    console.log("Fruta1", fruta1);
    console.log("fruta2", fruta2);
    console.log(resto_defruta);
}
listadofrutas("manzana", "fresa", "mango", "sandia", "platano");

//es hacer lo mismo que arriba
var frutas = ["manzana", "fresa"];
listadofrutas(...frutas, "mango", "sandia", "platano");
