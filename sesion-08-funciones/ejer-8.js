//sesión-8 ejercicio.
function alwaysTrue() {
  return true;
}

async function miPromesa() {
  return setTimeout(() => {
    console.log("Hola soy una promesa");
  }, 5000);
}

function* generatorId() {
  let id = 0;
  while (true) {
    yield (id += 2);
  }
}
console.log(miPromesa());
console.log(alwaysTrue());

console.log(generatorId().next());
console.log(generatorId().next());
console.log(generatorId().next());
