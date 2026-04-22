// pesquisa binária algoritmo de busca eficiente para encontrar um elemento em uma lista ordenada
// objetivo é reduzir o número de comparações necessárias para encontrar um elemento específico em uma lista ordenada
//log2(n) comparações

function binarySearch(arr, target) {
  let baixo = 0;
  let alto = arr.length - 1;
  let rodadas = 0;
  while (baixo <= alto) {
    let meio = Math.floor((baixo + alto) / 2);
    let chute = arr[meio];
    rodadas++;
    if (chute === target) {
      console.log(
        `Elemento encontrado na posição ${meio}, valor ${chute} com ${rodadas} rodadas`,
      );
      return meio;
    }
    if (chute > target) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
  }
  console.log(`Elemento não encontrado`);
  return null;
}

let list = [1, 3, 5, 7, 9];
binarySearch(list, 3);
binarySearch(list, -1);
binarySearch(list, 9);
