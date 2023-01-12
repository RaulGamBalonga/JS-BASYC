//Qué son las funciones, cómo se declaran y cómo se utilizan.

// saludo()
// function saludo(parametro_1, parametro_2, parametro_3) {
//     console.log("hola");
// }
// //////////////////
// const saludar = (nombre = "paco") => { //paco valor por defecto en vez de undefined
//     console.log(`Hola ${nombre}`);
// }
// saludar();

const nom = "Gorka";
//saludar('Miguel');
saludar(nom);

function saludar(nombre) {
  console.log(nom);
  console.log(`Hola ${nombre}`);
}
//////
let nombre_2 = "Juan";
despedir(nombre_2);
console.log(nombre_2);

function despedir(nombre) {
  nombre = "Diego";
  console.log(`Adios ${nombre}`);
}

////////////
let persona = { nombre: "Juan", apellido: "Gonzalez" };
saludarPersona(persona);
console.log(persona);

function saludarPersona(objeto) {
  objeto.apellido = "Villar";
  console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}
///+++++++ATENCIÓN !! diferenciar cuando pasar una variable por valor o por referencia
//-------------------------------------------------------
function imprimeNumero(numero = 7) {
  //parámetros por defecto
  console.log(numero);
}
imprimeNumero(9);
imprimeNumero(); //por defecto 7

/////
function imprimir(...parametros) {
  console.log(parametros);
}
imprimir(1, 2, 3, 4, 2, "hola", { id: 9 });
/////
function suma(...nums) {
  return nums.reduce((a, b) => a + b);
}
const s = suma(1, 2, 3, 4, 9, 15, 16);

console.log(s);

//////
// Ámbito de una función
//_____________________________
let variable = "hola";
function multiplicar(a = 0, b = 0) {
  console.log(variable);
  let variable_interna = "adios";
  return a * b;
}
console.log(variable_interna); // no puedo acceder variable interna desde fuera de la función

console.log(multiplicar(4, 9));
