const listaCompra = ['pan', 'manzanas','arroz','chocolate','vino']

listaCompra.push('plátanos');
listaCompra.pop();

const peliculas = [
    {
        titulo:"Avatar",
        director: "James Cameron",
        fecha: new Date(2022, 12, 15)
    },
    {
        titulo:"Kill Bill",
        director: "Quentin Tarantino",
        fecha: new Date(1980, 12, 15)
    },
    {
        titulo:"A new hope",
        director: "George Lucas",
        fecha: new Date(1970, 12, 15)
    }
];

const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date(2020,0,1))



const directores = peliculas.map(pelicula => {
    return peliculas.director
})
console.log(directores);

const titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})

const directores_titulos = directores.concat(titulos);
const directores_titulos_prop = [...directores, ...titulos]