// programação dinamica é uma técnica de otimização que resolve problemas complexos dividindo-os em subproblemas mais simples e armazenando os resultados desses subproblemas para evitar cálculos redundantes.
// A programação dinâmica é usada para resolver problemas de otimização, onde o objetivo é encontrar a melhor solução possível para um problema específico.
// A programação dinâmica é usada em uma variedade de problemas, como o problema da mochila, o problema do caixeiro viajante, o problema de cobertura de conjunto, entre outros.
// vou utilizar o exemplo da maior subsequência e da maior subsquencia comum mais longa para ilustrar a programação dinâmica.

const createMatriz = (rows = 0, columns = 0) => {
  const matriz = [];

  for (let i = 0; i < rows; i++) {
    matriz[i] = Array(columns).fill(0);
  }
  return matriz;
};

const longestSubstring = (firstWord = '', secondWord = '') => {
  const matriz = JSON.parse(
    JSON.stringify(createMatriz(firstWord.length, secondWord.length)),
  );
  let sizeSequence = 0;
  let indexSequence = 0;

  for (let i = 0; i < firstWord.length; i++) {
    for (let j = 0; j < secondWord.length; j++) {
      if (firstWord[i] === secondWord[j]) {
        matriz[i][j] = (i && j) > 0 ? matriz[i - 1][j - 1] + 1 : 1;

        if (matriz[i][j] > sizeSequence) {
          sizeSequence = matriz[i][j];
          indexSequence = i + 1;
        }
      } else {
        matriz[i][j] = 0;
      }
    }
  }
  return firstWord.slice(indexSequence - sizeSequence, indexSequence);
};

console.log(longestSubstring('vista', 'hish'));
console.log(longestSubstring('fish', 'hish'));
