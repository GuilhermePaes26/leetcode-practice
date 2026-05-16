// algoritmo k-vizinhos de uma base de dados de treinamento, classifica um novo ponto de dados com base na maioria dos k vizinhos mais próximos
// o algoritmo k-vizinhos é um algoritmo de aprendizado supervisionado, onde o objetivo é classificar um novo ponto de dados com base na maioria dos k vizinhos mais próximos
// vou usar um exemplo de classificação de pães para ilustrar o algoritmo k-vizinhos
// você tem uma padaria e quer ver quantos pães você tem que preparar de acordo com a demanda
// você tem uma base de dados de treinamento com as seguintes informações: clima 1 - 5, fim de semana/feriado ou dia normal (0 ou 1), há um jogo neste dia (0 ou 1), e a quantidade de pães vendidos

const trainingData = [
  [5, 1, 0, 300], // clima 5, fim de semana/feriado, sem jogo, vendeu 300 pães
  [1, 1, 0, 75], // clima 1, fim de semana/feriado, sem jogo, vendeu 75 pães
  [4, 0, 0, 150], // clima 4, dia normal, sem jogo, vendeu 150 pães
  [3, 1, 1, 225], // clima 3, fim de semana/feriado, com jogo, vendeu 225 pães
  [4, 0, 1, 200], // clima 4, dia normal, com jogo, vendeu 200 pães
  [2, 0, 0, 50], // clima 2, dia normal, sem jogo, vendeu 50 pães
];

const distance = (point1, point2) => {
  let sum = 0;
  for (let i = 0; i < point1.length - 1; i++) {
    sum += (point1[i] - point2[i]) ** 2;
  }
  return Math.sqrt(sum);
};

const knn = (trainingData, newPoint, k) => {
  const distances = trainingData.map((point) => {
    return {
      point,
      distance: distance(point, newPoint),
    };
  });
  distances.sort((a, b) => a.distance - b.distance);
  const neighbors = distances.slice(0, k);
  const totalPao = neighbors.reduce(
    (sum, neighbor) => sum + neighbor.point[3],
    0,
  );
  return totalPao / k;
};

const newPoint = [4, 1, 0];
const k = 4;
const predictedPao = knn(trainingData, newPoint, k);
console.log(`A quantidade de pães a ser preparada é: ${predictedPao}`);
