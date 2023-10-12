class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left == null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right == null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right; // igual ao else feito no left
      }
    }
  }
  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }
  minValue(currentNode) {
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}

let myTree = new BST();
console.log(myTree);
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);

myTree.insert(52);
myTree.insert(82);

console.log(myTree);

console.log(myTree.contains(47));
console.log(myTree.contains(13));

console.log(myTree.minValue(myTree.root)); // menor valor do lado esq
console.log(myTree.minValue(myTree.root.right)); // menor valor do lado dir

///>>> aula>
// class Node {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }

//     insert(newValue) {
//       if(newValue < this.value) {
//         if(this.left == null) {
//           let node = new Node(newValue);
//           this.left = node;
//         }
//         else {
//           this.left.insert(newValue)
//         }

//       }
//       else {
//         if(this.right == null) {
//           let node = new Node (newValue);
//           this.right = node;
//         }
//         else {
//           this.right.insert(newValue)
//         }
//       }
//     }

//     search(searchValue) {
//       if(searchValue === this.value) return this;

//       if(this.left && searchValue < this.value)
//         return this.left.search(searchValue);

//       if(this.right && searchValue > this.value)
//         return this.right.search(searchValue);

//       return null;
//     }

//     inOrder() {
//       if (this.left) this.left.inOrder();
//       console.log(this.value);
//       if (this.right) this.right.inOrder();
//     }

//     inOrder2(array) {
//       if (this.left) this.left.inOrder2(array);
//       array.push(this.value);
//       if (this.right) this.right.inOrder2(array);
//     }

//     preOrder() {
//       console.log(this.value);
//       if (this.left) this.left.inOrder();
//       if (this.right) this.right.inOrder();
//     }

//     posOrder() {
//       if (this.left) this.left.inOrder();
//       if (this.right) this.right.inOrder();
//       console.log(this.value);
//     }
//   }

//   let root = new Node(50)
//   root.insert(80)
//   root.insert(30)
//   root.insert(20)
//   root.insert(100)
//   root.insert(40)
//   root.insert(45)

//   let array = [];
//   root.inOrder2(array);
//   // console.log(array)

//   // let array = [20, 30, 50, 60, 100, 200, 1200]
//   function buildBalanceBST(array, min, max) {
//   //   if (max < min) return null;

//   //   let mid = Math.floor((min + max)/2);

//   //   let root = new Node(array[mid]);
//   //   root.left = buildBalanceBST(array, min, mid - 1);
//   //   root.right = buildBalanceBST(array, mid + 1, max);

//   //   return root;
//   // }
//   let root = buildBalanceBST(array, 0, array.length - 1);
//   // console.log(root)
