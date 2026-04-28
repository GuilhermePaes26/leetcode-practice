// pegando o maior numero de uma lista utilizando função recursiva

let numbers = [2, 4, 6, 127, 24, 32, 128];

function getmaiornumber(array) {
  if (array.length === 1) return array[0];

  let maiorDoResto = getmaiornumber(array.slice(1));

  return array[0] > maiorDoResto ? array[0] : maiorDoResto;
}

console.log(getmaiornumber(numbers));
