//leetcode.com/problems/maximum-depth-of-n-ary-tree/

class TreeNode {
  val: number;
  children: TreeNode[];
  constructor(val?: number, children?: TreeNode[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

function maxDepth(root: TreeNode | null): number {
  return depth(root);
}

function depth(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }

  let maxHeight = 0;
  for (let i = 0; root.children != null && i < root.children.length; i++) {
    let height = depth(root.children[i]);
    if (height > maxHeight) {
      maxHeight = height;
    }
  }

  return maxHeight + 1;
}
