const {numeros, ehPar} = require('./base');

// forEach --> executa uma função específica em cada elemento do array

//ela NÃO RETORNA NADA, mas você pode iterar sobre todo o array e fazer uma determinada ação SEM ALTERAR esse array. 

const numeros2 = []

numeros.forEach(elemento => elemento * 2);
numeros.forEach(elemento => numeros2.push(elemento * 2));

//repare que o forEach não conseguiu alterar os elementos de numeros, mas ele consegue acrescentar em numeros2 esse elemento modificado

console.log('numeros: ', ...numeros);
console.log('numeros2:', ...numeros2);