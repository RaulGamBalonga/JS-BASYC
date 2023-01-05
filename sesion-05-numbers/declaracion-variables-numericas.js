// Sesión 05 - Numbers
// Declaración de variables numéricas (enteros y con decimales)
let a = 5;

console.log(a);

let b = 0.1;

console.log(b);

// Precisión
let c = 0.2;

console.log(b + c);  //0.30000004
//pequeño truco para obtener valores reales
console.log(Math.round((0.1 + 0.2) *100)/100); //0.3 sin mas decimales y sin error
