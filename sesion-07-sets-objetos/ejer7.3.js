//Ejercicio 3.

const fecha = new Date();
console.log(fecha);

const birthDate = new Date(1990, 2, 14);
console.log(birthDate);

console.log(fecha.getTime() === birthDate.getTime());

const myMonth = birthDate.getMonth() + 1;
console.log(myMonth);

const myYear = birthDate.getFullYear();
console.log(myYear);
