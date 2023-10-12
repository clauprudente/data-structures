/*
 V = vertices
 E = arestas (edges)
*/

class Graph {
  constructor(V) {
    this.V = V;
    this.E = 0;

    this.adjList = {};
    this.weightList = {};

    for (let i = 0; i < this.V; i++) {
      this.adjList[i] = [];
      this.weightList[i] = [];
    }
  }

  addEdge(source, target, weight) {
    this.E++;
    this.adjList[source].push(target);
    this.weightList[source].push(weight);
  }

  hasEdge(source, target) {
    return this.adjList[source].includes(target);
  }

  bfs(source) {
    // vou implementar uma fila usando um array, ok?
    let queue = []; // fila
    let visited = Array(this.V).fill(false); // criando o array de visited
    let visitedNodes = [];

    queue.push(source); // inserindo no final da fila
    visited[source] = true; // marcando source como visitado

    while (queue.length > 0) {
      let wNode = queue.shift(); // retirando o elemento do inicio da fila (equivalente ao q.pop())
      visitedNodes.push(wNode);
      const myNeighs = this.adjList[wNode];
      for (const neigh of myNeighs) {
        // iterando sobre todos os vizinhos de wNode
        if (!visited[neigh]) {
          // se o vizinho ainda não foi visitado
          visited[neigh] = true; // marca como visitado  (IMPORTANTE: aqui é o lugar certo de marcar como visitado, não esqueçam disso)
          queue.push(neigh); // adiciona na fila
        }
      }
    }

    return visitedNodes;
  }

  dfs(source, visitedNodes) {
    // aqui nao tem um return, é só o console.log?
    if (visitedNodes === undefined) {
      visitedNodes = new Set();
    }

    if (!visitedNodes.has(source)) {
      console.log(source);

      visitedNodes.add(source);
      for (const neigh of this.adjList[source]) {
        this.dfs(neigh, visitedNodes);
      }
    }
  }

  dfsIter(source) {
    // vou implementar uma pilha usando um array, ok?
    let stack = []; // pilha
    let visited = Array(this.V).fill(false); // criando o array de visited
    let visitedNodes = [];

    stack.push(source); // inserindo no topo da pilha
    visited[source] = true; // marcando source como visitado

    while (stack.length > 0) {
      let wNode = stack.pop(); // retirando o elemento do topo da pilha
      visitedNodes.push(wNode);

      console.log(wNode);

      const myNeighs = this.adjList[wNode];
      for (let i = myNeighs.length - 1; i >= 0; i--) {
        // iterando sobre todos os vizinhos de wNode
        const neigh = myNeighs[i];
        if (!visited[neigh]) {
          // se o vizinho ainda não foi visitado
          visited[neigh] = true; // marca como visitado  (IMPORTANTE: aqui é o lugar certo de marcar como visitado, não esqueçam disso)
          stack.push(neigh); // adiciona na pilha
        }
      }
    }

    return visitedNodes;
  }
}

let g = new Graph(100);
g.addEdge(1, 2);
g.addEdge(1, 4);
g.addEdge(2, 3);
g.addEdge(2, 4);
g.addEdge(2, 5);
g.addEdge(3, 5);

g.dfs(1);
console.log("--------");
g.dfsIter(1);
