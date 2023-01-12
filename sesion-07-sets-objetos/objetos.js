//Trabajando con Objetos

const obj = {
  id: 4,
  nombre: "juan",
  apellido: "Gonzalez",
  isDeveloper: true,
  LibrosFavs: ["el metodo", "el código de la manifestación"],
  "4-juegos": [1, 2, 3, 4],
};

//Acceder a una propiedad del objeto
console.log(obj.id);
console.log(obj["nombre"]);

const prop = "isDeveloper";
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Iñigo";
console.log(obj2.nombre);

console.log(obj.nombre);
console.log(obj2.nombre);

let val1 = 4;
let val2 = val1;

//////////////////////////////

val2 = 6;
console.log(val1);
console.log(val2);

const obj3 = { ...obj };
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Gorka";

console.log(obj.nombre);
console.log(obj3.nombre);

///////////////////////////////
//Cómo ordenar Listas de objetos en función  de una propiedad

const listaPeliculas = [
  { titulo: "Lo que el viento se llevo", año: 1939 },
  { titulo: "Titanic", año: 1997 },
  { titulo: "Moana", año: 2016 },
  { titulo: "El efecto mariposa", año: 2004 },
  { titulo: "TED", año: 2012 },
];
console.log(listaPeliculas);
//.sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL.
//Ordenar por Año.
// listaPeliculas.sort((a,b) => a.año - b.año);

//Ordenar por titulo
listaPeliculas.sort((a, b) => a.titulo - b.titulo);

console.log(listaPeliculas);
console.log(listaPeliculas);
