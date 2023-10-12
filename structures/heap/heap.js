class HeapAsVector {
  data;
  constructor() {
    this.data = [];
  }

  insert(val) {
    this.data.push(val);
  }

  remove() {
    let maxIndex = 0;

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] > this.data[maxIndex]) maxIndex = i;
    }

    for (let i = maxIndex; i < this.data.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.data.pop();
    return this.data[maxIndex];
  }
}

class HeapVectorSort {
  data;
  constructor() {
    this.data = [];
  }

  insert(val) {
    this.data.push(val);
    this.data.sort();
  }

  remove() {
    if (this.data.length === 0) return;

    let lastElement = this.data[this.data.length - 1];
    this.data.pop();

    return lastElement;
  }
}

class HeapVectorPosition {
  data;
  constructor() {
    this.data = [];
  }

  insert(val) {
    this.data.push(val);

    for (let i = this.data.length - 2; i >= 0; i--) {
      if (this.data[i] > val) {
        this.data[i + 1] = this.data[i];
        this.data[i] = val;
      } else {
        break;
      }
    }
  }

  remove() {
    if (this.data.length === 0) return;

    let lastElement = this.data[this.data.length - 1];
    this.data.pop();

    return lastElement;
  }
}

class Heap {
  data;
  constructor() {
    this.data = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  left(index) {
    return Math.floor(2 * index + 1);
  }

  right(index) {
    return Math.floor(2 * index + 2);
  }

  heapify(index) {
    let maxIndex = index; // Define a raiz como o maior index

    /**
     * Verifica se tem filho a esquerda
     * E se ele é maior que a raiz
     * Se sim, salva ele como maior
     */
    if (
      this.left(index) < this.data.length &&
      this.data[this.left(index)] > this.data[maxIndex]
    ) {
      maxIndex = this.left(index);
    }

    /**
     * Verifica se tem filho a direita
     * E se ele é maior que o atual maior
     * Se sim, salva ele como maior
     */
    if (
      this.right(index) < this.data.length &&
      this.data[this.right(index)] > this.data[maxIndex]
    ) {
      maxIndex = this.right(index);
    }

    /**
     * Se o maior for a raiz, nada acontece
     * Caso não, troca de posição a raiz com o maior
     * e repete para o novo maior index
     */
    if (maxIndex !== index) {
      [this.data[maxIndex], this.data[index]] = [
        this.data[index],
        this.data[maxIndex],
      ];
      this.heapify(maxIndex);
    }
  }

  /**
   * Para inserir vamos, colocar o novo elemento no final do array
   * E validar se ele maior que o seu pai, caso seja,
   * Os trocaremos de posição e repetimos o processo
   * @param {number} val
   */
  insert(val) {
    this.data.push(val); //insere na ultima posição
    let index = this.data.length - 1; // pega o index da ultima posição

    while (index > 0) {
      if (this.data[index] <= this.data[this.parent(index)]) {
        break;
      } else {
        [this.data[index], this.data[this.parent(index)]] = [
          this.data[this.parent(index)],
          this.data[index],
        ];
        index = this.parent(index);
      }
    }
  }

  remove() {
    if (this.data.length === 0) return;

    let rootValue = this.data[0];

    let temp = this.data[this.data.length - 1];
    this.data[this.data.length - 1] = this.data[0];
    this.data[0] = temp;

    // [this.data[this.data.length-1], this.data[0]] = [this.data[0], this.data[this.data.length-1]]
    this.data.pop();
    this.heapify(0);

    return rootValue;
  }
}

let garage1 = new HeapAsVector();
garage1.insert(12);
garage1.insert(89);
garage1.insert(56);
garage1.remove();
console.log(garage1);

let garage2 = new HeapVectorSort();
garage2.insert(12);
garage2.insert(89);
garage2.insert(56);
garage2.remove();
console.log(garage2);

let garage3 = new HeapVectorPosition();
garage3.insert(12);
garage3.insert(89);
garage3.insert(56);
garage3.remove();
console.log(garage3);

let garage4 = new Heap();
garage4.insert(12);
garage4.insert(89);
garage4.insert(56);
garage4.remove();
console.log(garage4);
