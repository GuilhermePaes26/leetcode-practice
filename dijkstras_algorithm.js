// dijkstras é um algoritmo de busca de caminho mínimo em grafos, que pode ser usado para encontrar o caminho mais curto entre dois nós em um grafo ponderado. Ele funciona atribuindo a cada nó um valor de distância, que é atualizado à medida que o algoritmo percorre o grafo. O nó com a menor distância é sempre escolhido para ser explorado a seguir.
// Tempo de execução: O((V + E) log V), onde V é o número de vértices e E é o número de arestas no grafo.

const graph = {};
graph.start = {};
graph.start.a = 6;
graph.start.b = 2;

graph.a = {};
graph.a.fin = 1;

graph.b = {};
graph.b.a = 3;
graph.b.fin = 5;

graph.fin = {};

// tabela de custos
const costs = {};
costs.a = 6;
costs.b = 2;
costs.fin = Infinity;

// tabela de pais
const parents = {};
parents.a = 'start';
parents.b = 'start';
parents.fin = null;

let processed = [];

const findLowerCostNode = (itCosts) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  Object.keys(itCosts).forEach((node) => {
    const cost = itCosts[node];
    // Se for o menor custo visto até agora e não estiver na lista de processados...
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  });
  return lowestCostNode;
};

let node = findLowerCostNode(costs);

while (node !== null) {
  //aqui é onde o algoritmo realmente acontece
  // pego o custo do nó atual e seus vizinhos e calculo o custo para cada vizinho do nó atual
  // se o custo para um vizinho for menor do que o custo atual registrado para esse vizinho, atualizo o custo para esse vizinho e registro o nó atual como pai desse vizinho
  // depois de processar todos os vizinhos do nó atual, marco o nó atual como processado e repito o processo para o próximo nó com o menor custo
  // isso continua até que todos os nós tenham sido processados, ou seja, até que tenhamos encontrado o caminho mais curto para todos os nós do grafo
  const cost = costs[node];
  const neighbors = graph[node];
  Object.keys(neighbors).forEach((n) => {
    const newCost = cost + neighbors[n];
    if (costs[n] > newCost) {
      costs[n] = newCost;
      parents[n] = node;
    }
  });
  processed.push(node);
  node = findLowerCostNode(costs);
}

console.log('custo para cada nó');
console.log(costs);
