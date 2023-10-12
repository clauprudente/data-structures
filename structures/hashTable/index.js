class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    let WEIRD_PRIME = 31; //quando o length é um numero primo, pode ser vantajoso pois tem menos chances de ter collisions
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      //vai encontrar o minimo entre o length e 100, se length for 90, vai usar o 90, se for 150000, vai usar o 100, para evitar milhares de loops
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      hash = (hash * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key); // descobre em qual index está aquela key p/ retornar o value
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        // quando tem mais de um item no mesmo index
        if (this.keyMap[index][i][0] === key) {
          //return this.keyMap[index][i]// retorna o array [key,value] encontrado
          return this.keyMap[index][i][1]; //retorna só o value
        }
      }
      //return this.keyMap[index] // retorna tudo que tem naquela index
    }
    return undefined; // se nao encontrou nada naquele keymap[index]
  }

  keys() {
    let allKeys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      //i > loop no map
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // loop em cada index
          if (!allKeys.includes(this.keyMap[i][j][0])) {
            allKeys.push(this.keyMap[i][j][0]); // push das keys [1] encontrados dentro do array valueskeys
          }
        }
      }
    }
    return allKeys;
  }

  values() {
    let allValues = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      //i > loop no map
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // loop em cada index
          if (!allValues.includes(this.keyMap[i][j][1])) {
            // condiçao para nao colocar item repetido
            allValues.push(this.keyMap[i][j][1]); /// push dos values [1] encontrados dentro do array valuesArr
          }
        }
      }
    }
    return allValues;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");

console.log(ht.get("olive")); /// vai retornar blue
console.log(ht.get("salmon"));
//console.log(ht)

console.log(ht.keys());
console.log(ht.values());
