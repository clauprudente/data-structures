class DisjointSet {
  constructor(size) {
    this.dis_set = [];
    for (let i = 0; i < size; i++) {
      this.dis_set.push(i);
    }
  }

  set(elem) {
    if (this.dis_set[elem] !== elem) {
      this.dis_set[elem] = this.set(this.dis_set[elem]);
    }
    return this.dis_set[elem];
  }

  union(elem1, elem2) {
    this.dis_set[this.set(elem1)] = this.set(elem2);
  }
}

function Kruskal() {
  let mst = new Graph(this.V);

  // Passo 1 - O(V): Definir cada nó com uma cor diferente
  let dSet = new DisjointSet(this.V);

  // Passo 2 - O(E): Criar um vetor com todas as arestas
  let edges = []; // (weight, source, target)
  for (let source = 0; source < this.V; source++) {
    let numberOfNeighbors = this.adjList[source].length;
    for (let i = 0; i < numberOfNeighbors; i++) {
      let weight = this.weightList[source][i];
      let target = this.adjList[source][i];
      edges.push([weight, source, target]);
    }
  }

  // Passo 3 - O(E logE): Ordenar o vetor de acordo com o peso
  edges.sort((a, b) => a[0] - b[0]);

  let sumEdges = 0;

  // Passo 4: Iterar sobre o vetor ordenado O(E + V^2)
  for (let i = 0; i < edges.length; i++) {
    let weight = edges[i][0];
    let source = edges[i][1];
    let target = edges[i][2];

    // Passo 4.1: Adicionar na solução aqueles com cores diferentes, marcar ambos com a mesma cor
    if (dSet.set(source) !== dSet.set(target)) {
      // O(V-1)
      mst.addEdge(source, target, weight);
      mst.addEdge(target, source, weight);
      sumEdges += weight;
      dSet.union(source, target); // O(logV)
    }
  }

  return [mst, sumEdges];
}
