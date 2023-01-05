//Principales operaciones aritméticas

let a = 3.5;
let b = 4.8;

//Suma (+)
console.log(a + b);

//Resta (-)
console.log(a - b);
//Multiplicación
console.log(a * b);
//División(/)
console.log(a / b);

//Representación de los números en cadena de texto

console.log(typeof a);

let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

//Redondeo de números decimales
let c = 3.3;

let d = c * 3;
console.log(typeof d);
console.log(d);
//toFixed() ---> Limitar el número de decimales al valor x.
console.log(d.toFixed(0));
console.log(d.toFixed(1));
console.log(d.toFixed(2));
console.log(d.toFixed(3));
console.log(typeof d.toFixed(3));

let e = 1143.4874382;
let fantastic = 784239;

console.log(e.toFixed(2));
console.log(fantastic.toFixed(2));

//toPrecision(x) --> Limita el número de cifras significativas.
console.log(e.toPrecision(4));
console.log(e.toPrecision(7));
console.log(e.toPrecision(6));

console.log(typeof e.toPrecision(6));
