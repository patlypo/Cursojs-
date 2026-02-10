//FUNCIONES
//Es una agrupación de reutilizable de un conjunto de instrucciones

function calculadora(numero1, numero2, mostrar = false){
    if (mostrar = false) {
        console.log("Suma " + (numero1 + numero2));
        console.log("Resta " + (numero1 - numero2));
        console.log("*******************");
        
    }else{
        document.write("Suma " + (numero1 + numero2)) + "<br/>";
        document.write("Resta " + (numero1 - numero2));
        document.write("*******************");

    }
    //return "Hola soy la calculadora";
}
calculadora(2,8);
calculadora(2,4, true)
/** 
for (var i = 1; i<=10; i++){
    console.log(i);
    calculadora(i, 8);

}*/
