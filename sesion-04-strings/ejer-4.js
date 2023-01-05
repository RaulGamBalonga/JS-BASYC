// Crea un archivo JS que contenga las siguientes líneas

// - Una cadena de texto con tu Nombre

// - Otra cadena de texto con tu Apellido

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

// - Una variable que contenga la primera letra del Nombre

// - Otra variable que contenga la última letra del Apellido

// - Una cadena de texto que elimine los espacios de la variable "estudiante"

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

const nombre = "Raul";
const apellido = "Gambalonga";
const estudiante = nombre.concat(" ").concat(apellido);
console.log(estudiante);
const universitario = `mi nombre es ${nombre} y mi apellido es ${apellido}`;
console.log(universitario);
const estudianteMayus = estudiante.toLocaleUpperCase();
console.log(estudianteMayus);
const estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);
const tamañoEstudiante = estudiante.length;
console.log(tamañoEstudiante);
const firstLetterA = nombre[0];
const firstLetterB = nombre.substring(0, 1);
console.log(firstLetterA);
console.log(firstLetterB);
const endLetter = apellido[apellido.length - 1];
const endLetterB = apellido.substring(apellido.length - 1, apellido.length);
console.log(endLetter);
console.log(endLetterB);
const studentsNoSpace = estudiante.replace(/ /g, "");
console.log(studentsNoSpace);
const nameStudent = estudiante.includes(nombre);
console.log(nameStudent);


