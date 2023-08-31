//leetcode.com/problems/validate-binary-search-tree/

class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(value?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.value = value === undefined ? 0 : value;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  insert(newValue: number) {
    if (newValue < this.value) {
      if (this.left == null) {
        let node = new TreeNode(newValue);
        this.left = node;
      } else {
        this.left.insert(newValue);
      }
    } else {
      if (this.right == null) {
        let node = new TreeNode(newValue);
        this.right = node;
      } else {
        this.right.insert(newValue);
      }
    }
  }
}

function isValidBST(root: TreeNode | null): number[] {
  const inOrderTree: number[] = [];
  inOrder(inOrderTree, root);
  console.log(inOrderTree);
  return inOrderTree.sort((a, b) => a - b);
}

function inOrder(array: number[], root: TreeNode | null) {
  if (root?.left) inOrder(array, root.left);
  if (root?.value) array.push(root.value);
  if (root?.right) inOrder(array, root.right);
}

let tree = new TreeNode(5);
tree.insert(1);
tree.insert(4);
tree.insert(3);
tree.insert(6);

isValidBST(tree);
console.log(tree);
