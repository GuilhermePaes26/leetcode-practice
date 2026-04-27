// contando itens em uma lista

let lista = ['Maça', 'banana', 'abacaxi'];

function count(array) {
  if (array.length === 0) {
    return 0;
  }
  return 1 + count(array.slice(1));
}

console.log(count(lista));
