// soma utilizando função recursiva

let numbers = [2, 4, 6, 24, 32];

function sum(array) {
  if (array.length === 1) {
    return array[0];
  }
  let init = array[0];
  let newArray = array.slice(1);
  let total = init + sum(newArray);
  return total;
}

console.log(sum(numbers));
