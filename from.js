const {numeros, ehPar} = require('./base');

// from --> cria outro array a partir de um array existente

const copia1 = Array.from(numeros);
console.log(...copia1);

//é possível passar uma condição no momento da criação para mapear os elementos
const copia2 = Array.from(numeros, (elemento) => elemento > 10);
console.log(...copia2);
//copia2 recebe um novo array com valores true caso elemento > 10, e false caso não sejam. 