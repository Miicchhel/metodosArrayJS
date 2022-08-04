const {numeros, ehPar} = require('./base');

// find -> itera por todos elementos da lista buscando o PRIMEIRO elemento que atenda a condição desejada

const busca = numeros.find((elemento) => elemento === 111);
console.log(busca);

const novaBusca = numeros.find((elemento) => !ehPar(elemento));
console.log(novaBusca);

//numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//Em busca foi retornado undefined porque não há 111 no array numeros.
//Em novaBusca foi retornado 1 porque ele é o primeiro elemento que não é par no array numeros.