const miListaDePendientes = [
    "Juego de Tronos",
    "Breaking Bad",
    "The Walking Dead",
    "Sex Education"
]

console.log(miListaDePendientes)


const pelicula = prompt("Ingresar nueva película")

miListaDePendientes.push(pelicula)
miListaDePendientes[1] = "Batman"


console.log(miListaDePendientes)