'use strict';

// Big O - Time O(n) where n == the number of nodes && Space o(h) where h == the height of branch
let stringNode = '';
let stringNode2 = '';
let stringNode3 = '';

const preOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  stringNode += rootNode.value;

  preOrderTraversal(rootNode.left);
  preOrderTraversal(rootNode.right);
  return stringNode;
};

const postOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }

  postOrderTraversal(rootNode.left);
  postOrderTraversal(rootNode.right);
  stringNode2 += rootNode.value;
  return stringNode2;
};

const inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }

  inOrderTraversal(rootNode.left);
  stringNode3 += rootNode.value;
  inOrderTraversal(rootNode.right);
  return stringNode3;
};

export { preOrderTraversal, postOrderTraversal, inOrderTraversal };
