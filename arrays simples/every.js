const {numeros, ehPar} = require('./base');

// every --> itera pelos elementos do array até que a função retorne false.
console.log(numeros.every(ehPar));

//numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// na primeira iteração ehPar(0) retorna true porque 0 % 2 === 0 é true.
// na segunda iteração ehPar(1) retorna false porque 1 % 2 === 0 é false.
// Assim, o método every é terminado e retorna false porque nem todos elementos de numeros satisfaz a condição desejada.