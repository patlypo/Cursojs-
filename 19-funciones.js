//FUNCIONES
//Es una agrupación de reutilizable de un conjunto de instrucciones

function calculadora(numero1, numero2){
    console.log("Suma " + (numero1 + numero2));
    console.log("Resta " + (numero1 - numero2));
    console.log("*******************")
    //return "Hola soy la calculadora";

}

for (var i = 1; i<=10; i++){
    console.log(i)
    calculadora(i, 10);

}
