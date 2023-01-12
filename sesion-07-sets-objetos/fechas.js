//Trabajando con Fechas.
//Formas de inicializar fechas.

//1- Fecha actual que se actualiza constantemente.
const fecha = new Date();
console.log(fecha);

//2- Fecha concreta ---los meses inicializan en 0 ( 0 -> Enero, 11 -> Diciembre)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192);
console.log(fecha2);

//3- Fecha por milisengundos
const fecha3 = new Date(0);
console.log(fecha3);

//4- Strings
const fecha4 = new Date("October 13, 1979 12:15:15");
console.log(fecha4);

//////
//comparar fechas
console.log(fecha > fecha2);

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192); // mismos datos fecha2
console.log(fecha5);

console.log(fecha2 === fecha5); //ERROR!! No se pueden comparar fechas de esta manera

//para comparar igualdad entre fechas usamos el método getTime()
console.log(fecha2.getTime() === fecha5.getTime());

////////////
//OBtener el dia, el mes y el año de una fecha.
//Obtener el dia .getDate();
console.log(fecha2.getDate());

//Obtener el mes .getMonth();
console.log(fecha2.getMonth() + 1);

//Obtener el año getFullYear();
console.log(fecha2.getFullYear());

//Pasar una fecha a un string , toLocaleDateString
console.log(fecha2);
console.log(fecha2.toLocaleDateString());
console.log(typeof fecha2);

