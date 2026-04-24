// algoritmo de ordenação por seleção
// o algoritmo de ordenação por seleção é um método simples de ordenação que funciona dividindo a lista em duas partes: a parte ordenada e a parte não ordenada. O algoritmo seleciona o menor elemento da parte não ordenada e o troca com o primeiro elemento da parte não ordenada, repetindo esse processo até que toda a lista esteja ordenada.
// Big O(n^2) comparações

function getmenornumber(arr, startingIndex) {
  let menorIndice = startingIndex;
  for (let index = startingIndex + 1; index < arr.length; index++) {
    if (arr[index] < arr[menorIndice]) {
      menorIndice = index;
    }
  }
  return menorIndice;
}

function selection_sort(arr) {
  const copyArray = [...arr];

  for (let i = 0; i < copyArray.length; i++) {
    const smallestIndex = getmenornumber(copyArray, i);
    [copyArray[i], copyArray[smallestIndex]] = [
      copyArray[smallestIndex],
      copyArray[i],
    ];
  }
  return copyArray;
}

const sourceArray = [5, 3, 64, 6, 40, 30, 128, 23, 2, 10];
const sortedArray = selection_sort(sourceArray);

console.log('Source array - ', sourceArray);
console.log('New sorted array - ', sortedArray);
