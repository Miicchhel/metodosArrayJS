 //? Array base para fazermos os filtros
const arrayNumeros = [7, 52, -6, 1, 0, 100, -42, -63, 99, 13, -15];
const arrayFiltros = [-20, 5, 15];

console.log('Array sendo filtrado')
const arrayFiltrado = arrayFiltros.reduce((acc, curr) => {
  const arraySendoFiltrado = acc.filter((item) => item > curr);
  console.log(arraySendoFiltrado); //aqui você pode ver cada array retornado após seu respectivo filtro.
  return arraySendoFiltrado;
}, arrayNumeros);

//? Entendendo o funcionamento:
//? Passo 1: Primeiro usamos o reduce em 'arrayFiltros' para podermos pegar seus itens no 'curr'
//?   Além disso, passamos como valor inicial do 'acc' o 'arrayNumero' -> linha 10
//? Passo 2: Usamos o filter no 'acc' para, a cada item, ele comparar com o 'curr' correspondente
//?   Inicialmente ele retorna em 'arraySendoFiltrado' um array filtrado com base no primeiro valor de 'arrayFiltros'
//?   Em sequencia ele faz isso novamente, mas agora usando o segundo valor de 'arrayFiltros'
//?   isso só para quando ele faz essa análise com todos os elementos 'arrayFiltros'

console.log('\nArray depois de ser filtrado')
console.log(arrayFiltrado);
