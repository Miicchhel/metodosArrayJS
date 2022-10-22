const {numeros, ehPar} = require('./base');

// filter --> cria um array com todos os elementos avaliados como true pela função especificada.

console.log(numeros.filter((elemento) => ehPar(elemento)));

//numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// É retornado um array com o resultado da função ehPar para cada elemento de numeros.
// [0, 2, 4, 6, 8, 10, 12, 14]