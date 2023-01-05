// Cómo obtener una lista a partir de otra .slice()

const array = ["hola", 1, 2, 3, true, null, "adios"];

//NO MODIFICA EL VALOR DEL ARRAY ORIGINAL********
console.log(array.slice(1, 4));

const array2 = array.slice(1, 4);
console.log(array2);

const array3 = array.slice(1, -3);
console.log(array3);

const arrayHola = array.slice(0, 1);
console.log(arrayHola);

const ArrayStrings = array.slice(4, 7);
console.log(ArrayStrings);

console.log(array.length);

const arrayHolaMasAdios = arrayHola.concat(ArrayStrings);
console.log(arrayHolaMasAdios);
