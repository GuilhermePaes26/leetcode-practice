// Algoritmos gulosos são um algoritmo de aproximação que segue a heurística de fazer a escolha localmente ótima em cada etapa, com a esperança de que isso levará a uma solução globalmente ótima.
//Eles são usados para resolver problemas de otimização, onde o objetivo é encontrar a melhor solução possível para um problema específico.
//Algoritmos gulosos são usados em uma variedade de problemas, como o problema da mochila, o problema do caixeiro viajante, o problema de cobertura de conjunto, entre outros.

let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations = {};

stations.kone = new Set(['id', 'nv', 'ut']);
stations.ktwo = new Set(['wa', 'id', 'mt']);
stations.kthree = new Set(['or', 'nv', 'ca']);
stations.kfor = new Set(['nv', 'ut']);
stations.kfive = new Set(['ca', 'az']);

const finalStations = new Set();

while (statesNeeded.size) {
  let bestStation = null;
  let statesCovered = new Set();
  Object.keys(stations).forEach((station) => {
    const states = stations[station];
    const covered = new Set([...statesNeeded].filter((x) => states.has(x)));
    if (covered.size > statesCovered.size) {
      bestStation = station;
      statesCovered = covered;
    }
  });
  statesNeeded = new Set(
    [...statesNeeded].filter((x) => !statesCovered.has(x)),
  );
  finalStations.add(bestStation);
}

console.log(finalStations);
