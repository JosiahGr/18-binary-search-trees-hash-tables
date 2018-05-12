'use strict';

import Node from './node';
// import inOrderTraversal from './traversals';

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(value) {
    const nodeToInsert = new Node(value);
    if (!this.root) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
  }

  _insert(rootNode, nodeToInsert) {
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        this._insert(rootNode.left, nodeToInsert);
      }
    } else if (!rootNode.right) {
      rootNode.right = nodeToInsert;
    } else {
      this._insert(rootNode.right, nodeToInsert);
    }
  }

  find(value) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }

  _find(rootNode, value) {
    if (!rootNode) { 
      return null;
    }
    if (!rootNode.right && !rootNode.left) { 
      return null;
    } else if (rootNode.right.value === value || rootNode.left.value === value) {
      return rootNode;
    } else if (rootNode.right.value < value) {
      return this._find(rootNode.right, value);
    }
    return this._find(rootNode.left, value);
  }

  getMin(node) {
    let newNode;

    if (!node) {
      newNode = this.root;
    }
    while (node.left) {
      newNode = node.left;
    }
    return newNode.data;
  }

  remove(data) {
    return this._removeNode(this.root, data);
  }

  _removeNode(node, data) { // eslint-disable-line
    if (!node) {
      return null;
    }
    if (data === node.data) {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      const temp = this.getMin(node.right);
      node.data = temp;
      node.right = this._removeNode(node.right, temp);
      return node;
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } 
    node.right = this._removeNode(node.right, data);
    return node;
  }
}

export default BinarySearchTree;
