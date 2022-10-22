const {numeros} = require('./base');

// of --> cria outro array a partir dos argumentos passados para o método.

//Nesse caso seria o mesmo que fazer numerosPares = [1, 2, 3, 4, 5]
const numerosPares = Array.of(1,2,3,4,5);
console.log(numerosPares);

//Podemos fazer uma cópia de um array usando o spread
const lista = Array.of(...numeros);
console.log(lista);