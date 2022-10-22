 //? Array base para fazermos os filtros
const arrayNumeros = [7, 52, -6, 1, 0, 100, -42, -63, 99];
const numero = 10;

const arrayFiltrado = arrayNumeros
  .filter((item) => item > numero)
  .sort((a, b) => a - b);

//? Entendendo o funcionamento: 
//?   Passo 1: passamos por todo 'arrayNumeros' usando o filter, assim comparamos seus 'itens' ao 'numero'
//?     Então foi retornado uma lista que só contém elementos maiores que o 'numero'. 
//?   Passo 2: Passamos por essa lista que foi retornada no passo 1 usando o sort
//?     Assim, ordenamos de forma crescente essa lista. 

console.log('Array antes do filter')
console.log(arrayNumeros);
console.log('\nArray depois do filter')
console.log(arrayFiltrado);