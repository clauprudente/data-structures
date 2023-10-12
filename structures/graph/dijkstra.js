class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = 0;
    this.adjList = [];
    this.weightList = []; // deixar essa info junto com o adjList
    for (let i = 0; i < vertices; i++) {
      //this.adjList = new Array(vertices).fill([])
      this.adjList[i] = [];
      this.weightList[i] = [];
    }
  }

  addEdge(source, target, weight) {
    this.edges += 1;
    this.adjList[source].push(target);
    this.weightList[source].push(weight);
  }

  hasEdge(source, target) {
    return this.adjList[source].includes(target);
  }

  bfs(source) {
    let queue = [source]; // queue.push(source)
    let visited = new Array(this.vertices).fill(false);
    let visitedNodes = [];

    visited[source] = true;

    while (!!queue.length) {
      let workNode = queue.shift();

      visitedNodes.push(workNode);

      for (let neigh of this.adjList[workNode]) {
        if (!visited[neigh]) {
          visited[neigh] = true;
          queue.push(neigh);
        }
      }
    }

    // while (queue.length) {
    //   const workNode = queue.shift();

    //   if (!visited.has(workNode)) {
    //     visited.add(workNode);
    //     visitedNodes.push(workNode);

    //     for (const neighbor of this.adjList[workNode]) {
    //       queue.push(neighbor);
    //     }
    //   }
    // }

    return visitedNodes;
  }

  // bfs(source) { // O(V+E)
  //   let queue = [source] // queue.push(source)
  //   let visited = new Set()
  //   let visitedNodes = []

  //   visited.add(source)

  //   while(!!queue.length) {
  //     let workNode = queue.shift()

  //     visitedNodes.push(workNode)

  //     for(neigh of this.adjList[workNode]) {
  //       if(!visited.has(neigh)) {
  //         visited.add() = neigh
  //         queue.push(neigh)
  //       }
  //     }
  //   }

  //   return visitedNodes
  // }

  dfsRec(source, visitedNodes = new Set()) {
    if (!visitedNodes.has(source)) {
      visitedNodes.add(source);
      for (let neigh of this.adjList[source]) {
        this.dfsRec(neigh, visitedNodes);
      }
    }

    return visitedNodes;
  }

  dfs(source) {
    let stack = [source]; // stack.push(source)
    let visited = new Array(this.vertices).fill(false);
    let visitedNodes = [];

    visited[source] = true;

    while (!!stack.length) {
      let workNode = stack.pop();

      visitedNodes.push(workNode);

      for (let neigh of this.adjList[workNode]) {
        if (!visited[neigh]) {
          visited[neigh] = true;
          stack.push(neigh);
        }
      }
    }

    return visitedNodes;
  }

  dijkstra(source) {
    let visited = new Set();
    let d = new Array(this.vertices).fill(Infinity);

    d[source] = 0;

    while (true) {
      //Escolher o nó de trabalho
      let wNode = -1;

      for (let node = 0; node < this.vertices; node++) {
        if (!visited.has(node)) {
          if (wNode === -1) {
            wNode = node;
          } else if (d[node] < d[wNode]) {
            wNode = node;
          }
        }
      }

      if (wNode === -1) {
        break;
      }

      visited.add(wNode);

      // Atualizar o d nos vizinhos do nó
      for (let i = 0; i < this.adjList[wNode].length; i++) {
        let neigh = this.adjList[wNode][i];
        let edgeWeight = this.weightList[wNode][i];

        if (d[wNode] + edgeWeight < d[neigh]) {
          d[neigh] = d[wNode] + edgeWeight;
        }
      }
    }

    return d;
  }
}

// const graphExample = new Graph(7);
// g.addEdge(1, 2, 1)
// g.addEdge(2, 1, 1)
// g.addEdge(1, 4, 1)
// g.addEdge(4, 1, 1)

// g.addEdge(2, 3, 1)
// g.addEdge(3, 2, 1)
// g.addEdge(2, 4, 1)
// g.addEdge(4, 2, 1)
// g.addEdge(2, 5, 1)
// g.addEdge(5, 2, 1)

// g.addEdge(3, 5, 1)
// g.addEdge(5, 3, 1)

// g.addEdge(4, 5, 1)
// g.addEdge(5, 4, 1)

// console.log(g.bfs(1))
// console.log(g.dfs(1))
// console.log(g.dfsRec(1))

// graphExample.addEdge(1, 2, 5);
// graphExample.addEdge(1, 3, 2);
// graphExample.addEdge(2, 3, 7);
// graphExample.addEdge(2, 4, 8);
// graphExample.addEdge(3, 5, 8);
// graphExample.addEdge(3, 4, 4);
// graphExample.addEdge(4, 5, 6);
// graphExample.addEdge(4, 6, 4);
// graphExample.addEdge(5, 6, 3);

const graph = new Graph(7);

graph.addEdge(1, 2, 5);
graph.addEdge(1, 3, 2);
graph.addEdge(2, 1, 5);
graph.addEdge(2, 3, 7);
graph.addEdge(2, 4, 8);
graph.addEdge(3, 1, 5);
graph.addEdge(3, 2, 7);
graph.addEdge(3, 4, 4);
graph.addEdge(3, 5, 8);
graph.addEdge(4, 2, 8);
graph.addEdge(4, 3, 4);
graph.addEdge(4, 5, 6);
graph.addEdge(4, 6, 4);
graph.addEdge(5, 3, 8);
graph.addEdge(5, 4, 6);
graph.addEdge(5, 6, 3);
graph.addEdge(5, 6, 3);
graph.addEdge(6, 4, 4);
graph.addEdge(6, 5, 3);

console.log(graph.dijkstra(1));
console.log(graph.dijkstra(2));
console.log(graph.dijkstra(3));
console.log(graph.dijkstra(4));
console.log(graph.dijkstra(5));
console.log(graph.dijkstra(6));
