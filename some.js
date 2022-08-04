const {numeros, ehPar} = require('./base');

// some --> itera pelos elementos do array até que a função retorne true;

console.log(numeros.some(ehPar));

//numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// na primeira iteração ehPar(0) retorna true porque 0 % 2 === 0 é true.
// Assim, o método some é terminado e retorna true porque pelo menos um dos elementos de numeros satisfaz a condição desejada.
