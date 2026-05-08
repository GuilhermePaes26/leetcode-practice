// algoritmo de busca em largura (BFS - Breadth-First Search)
// Divido em vertices e arestas, onde os vértices são os nós do grafo e as arestas são as conexões entre eles.
// Tempo de execução: O(V + E), onde V é o número de vértices e E é o número de arestas no grafo.

const graph = {};

graph.you = ['arthur', 'gabriel', 'felipe'];
graph.arthur = ['ramon', 'alex'];
graph.felipe = ['ramon'];
graph.gabriel = ['thom'];
graph.ramon = [];
graph.alex = [];
graph.thom = [];

const PersonIsSeller = (name) => name[name.length - 1] === 'm';

const search = (name) => {
  let searchQueue = [...graph[name]];
  const searched = [];

  while (searchQueue.length) {
    const person = searchQueue.shift(); //pegando primeira pessoa da fila
    if (searched.indexOf(person) === -1) {
      if (PersonIsSeller(person)) {
        console.log(`${person} is a seller!`);
        return true;
      }
      searchQueue = searchQueue.concat(graph[person]);
      searched.push(person);
    }
  }
  console.log(`Without sellers today!`);
  return false;
};

search('you');
