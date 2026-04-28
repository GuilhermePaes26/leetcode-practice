// quicksort função de ordenação
// Big O(n log n) - melhor caso
// Big O(n^2) - pior caso

function quicksort(array) {
  if (array.length <= 1) return array;
  let pivo = array[0];
  let maiores = [];
  let menores = [];
  // Podemos fazer com for ou com funções do proprio js
  //   for (let index = 1; index < array.length; index++) {
  //     if (array[index] > pivo) {
  //       maiores.push(array[index]);
  //     } else {
  //       menores.push(array[index]);
  //     }
  //   }

  // ex abaixo function js
  maiores = array.slice(1).filter((el) => {
    return el >= pivo;
  });
  menores = array.slice(1).filter((el) => {
    return el <= pivo;
  });
  return quicksort(menores).concat(pivo, quicksort(maiores));
}

console.log(quicksort([10, 5, 2, 3, 57, 98, 128, 340, 980, 1027, 1, 12]));
