'use strict';

// Big O - Time O(n) where n == the number of nodes && Space o(h) where h == the height of branch
// let stringNode3 = '';

const inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  inOrderTraversal(rootNode.left);
  // stringNode3 += rootNode.value;
  const parent = rootNode;
  inOrderTraversal(rootNode.right);
  return parent;
};

export default inOrderTraversal;
