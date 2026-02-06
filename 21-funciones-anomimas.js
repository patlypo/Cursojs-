//funciones anonimas
// es una funcion que no tiene nombre
function sumame(numero1, numero2, sumaysumestra, sumapor2){
    var suma = numero1+numero2;
    sumaysumestra(suma);
    sumapor2(suma);
    return suma;

}

sumame(5,7, function(dato){
    console.log("la suma es: " +dato);
},function(dato){
    console.log("La suma por 2 es: " + (dato*2));
}
);