const {numeros, ehPar} = require('./base');

// map --> cria OUTRO ARRAY, de mesmo tamanho, a partir de uma função que contém a condição e devolve os elementos do array que correspondam a condição

console.log(numeros.map((elemento) => ehPar(elemento)));

//numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// É retornado um array com o resultado da função ehPar para cada elemento de numeros.
// [true,  false, true, false, true,  false, true,  false, true, false, true,  false, true,  false, true, false]