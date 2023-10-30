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
}

function kruskal() {
  let mst = new Graph(v);

  // passo 1: definir cada nó com uma cor diferente
  let color = [];
  for (let i = 0; i < mst.vertices; i++) {
    color.push(1);
  }

  //passo 2: criar um vetor com todas as arestas
  let edges = [];
  for (let source = 0; source < mst.vertices; source++) {
    let numberOfNeighoors = mst.adjList[source].length;

    for (let i = 0; i < numberOfNeighoors; i++) {
      let weight = mst.weightList[source][i];
      let target = mst.adjList[source][i];

      edges.push((weight, source, target));
    }
  }
  //passo 3: ordenar o vetor de acordo com o peso
  edges.sort();

  //passo 4: iterar sobre o vetor ordenado
  for (let i = 0; i < mst.edges.length; i++) {
    let weight = edges[i][0];
    let source = edges[i][1];
    let target = edges[i][2];

    if (color[source] != color[target]) {
      mst.addEdge(source, target, weight);
      mst.addEdge(target, source, weight);

      colorSource = color[source];

      for (let j = 0; j < color.length; j++) {
        if (color[j] === colorSource) {
          color[j] = color[target];
        }
      }
    }
  }

  //passo 4.1: adiciona na solução aqueles com cores diferentes */

  return mst;
}
