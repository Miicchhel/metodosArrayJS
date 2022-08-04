// Este arquivo contém o array e a função que serão usados nas HOFs.

numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// A função ehPar - é par - verifica se um número é par. 
// Se a condição for verdadeira ela retornará true, caso contrário retornará false.

const ehPar = (elemento) => (elemento % 2 === 0) ? true : false;

// console.log('2 é par? ',ehPar(2));
// console.log('3 é par? ',ehPar(3));

module.exports = { numeros, ehPar };