"use strict";

let palabras = ['zapatilla', 'hola', 'mundo', 'patata', 'tomate', 'zanahoria']

palabras.forEach( function (elem) { console.log(elem) } ); 
palabras.forEach( function (elem, indice) { console.log(indice, elem) } );
palabras.forEach( (elem, indice) => { console.log(indice, elem) } );

palabras.forEach( elem => {
    console.log(elem.toUpperCase());
});

// let palabrasEnMayusculas = palabras.map( elem => {
//     return elem.toUpperCase();
// });

let palabrasEnMayusculas = palabras.map(elem => elem.toUpperCase());

let palabrasCortas = palabras.filter(elem => {
    return (elem.length <= 6);
});

let palabrasAlReves = palabras.sort((a, b) => {
    return (b.localeCompare(a));
});

let numeros = [2, 6, 4, 88, 3, 9];
let numerosOrdenados = numeros.sort((a, b) => {
    return a - b;
});

