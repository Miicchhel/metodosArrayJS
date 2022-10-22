// concat --> Junta vários arrays e devolve uma cópia dos arrays concatenados

const [zero, numerosPositivos, numerosNegativos] = [0, [1, 2, 3], [-3, -2, -1]];

//temos que especificar qual array irá receber os elementos
//nesse caso o escolhido foi numerosNegativos

const numeros = numerosNegativos.concat(zero, numerosPositivos);

console.log('zero:',zero);
console.log('numerosPositivos:',...numerosPositivos);
console.log('numerosNegativos:',...numerosNegativos);
console.log('numeros:',...numeros);

//lemre-se que numeros recebe uma cópia. 
//Então, nesse caso, se você mudar os elementos dos arrays, numeros permanecerá com o mesmo valor.

console.log('\nAdicionando -4 em numerosNegativos');
numerosNegativos.unshift(-4)
console.log('numerosNegativos:', ...numerosNegativos);
console.log('numeros:', ...numeros);