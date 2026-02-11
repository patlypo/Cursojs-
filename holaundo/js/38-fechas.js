var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var diasemana = fecha.getDay(); //Te da el día de la semana (0 para domingo, 1 para lunes, etc.).
var dia  = fecha.getDate();// te da el numuero del mes
var hora = fecha.getHours();
var minutos = fecha.getMinutes();

var textohora = 
    `El año es: ${year}
El mes es: ${mes + 1}
Dia semana es ${diasemana}
El dia es ${dia}
La hora es: ${hora + ":" + minutos}
     `;
console.log(fecha);
console.log(textohora);
console.log(fecha.toLocaleDateString('es-ES')); // Resultado: "11/2/2026"