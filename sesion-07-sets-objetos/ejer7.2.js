//Ejercicio 2

const personalData = {
  nombre: "Raúl",
  apellido: "apellido",
  edad: 32,
  altura: 190,
  eresDesarrollador: true,
};

const miEdad = personalData.edad;
console.log(`mi edad es: ${miEdad}`);

const listaDatos = [
  {
    ...personalData,
  },
  {
    nombre: "Pablo",
    apellido: "Cattermole",
    edad: 32,
    altura: 170,
    eresDesarrollador: false,
  },
  {
    nombre: "Natalia",
    apellido: "Ronda",
    edad: 35,
    altura: 168,
    eresDesarrollador: true,
  },
];

const listaDatosOrdenada = listaDatos.sort((a, b) => b.edad - a.edad);
console.log(listaDatosOrdenada);
