// operador .valueOf() - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());
// NaN ( NOt a Number) - Infinity
let n = Number("adios");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;

let divisor_2 = null;

console.log(numerador / divisor);
console.log(numerador / divisor_2);
// Cómo convertir los string a valores numéricos conNumber, parseInt y parseFloat
let numero = "5.89";
let num2 = 17.2;

console.log(typeof numero);
console.log(typeof num2);
console.log(numero + num2); // ERROR!! los concatena no los suma.

console.log(Number(numero) + num2);

console.log(parseInt(numero)); // método para convertir en numero entero.
console.log(parseFloat(numero)); // método para convertir en número decimal.

// Números hexadecimales (base 16)
let numHex = "0x3a5b7";
console.log(parseInt(numHex, 16));

// Obtener los valores máximo y mínimo en Javascrypt.
let minPrecision = Number.EPSILON;
let minValorJs = Number.MIN_VALUE;
let maxValorJs = Number.MAX_VALUE;

console.log(minPrecision);
console.log(minValorJs);
