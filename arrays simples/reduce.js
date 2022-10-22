const {numeros, ehPar} = require('./base');

// reduce --> recebe 4 parâmetros: atual, corrente, index, array. Atual e corrente são obrigatórios.

//Aplicações

//somando números do array
const soma = (a, b) => a + b;
const somando = (array) => {
  return array.reduce((atual, corrente) => {
    // console.log(`atual: ${atual} | corrente: ${corrente}`);
    return soma(atual, corrente)
  });
}

console.log('retorno da função somando:',somando(numeros));

/*
Entendendo o funcionamento

função soma retorna a soma de dois números, ela é usada dentro da função somando.

funcao somando recebe como parâmetro um array qualquer. Nele, o reduce percorre pelos seus elementos retornando,
nesse caso, a soma do numero atual mais o numero corrente. Por fim, ele retorna a soma de todos os elementos.

Para melhor visualização do funcionamento descomente a linha 11 e rode o código.
*/ 
