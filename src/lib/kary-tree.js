'use strict';

import Queue from 'queue-fifo';
import Stack from './stack';

export default class KAryTree {
  constructor(root) {
    this.root = root;
  }

  breadthSearchTraversal() {
    if (!this.root) {
      return null;
    }
    return this._breadthFirstSearch(this.root);
  }

  _breadthFirstSearch(root, callback) { //eslint-disable-line
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      // console.log(`visiting ${currentNode.value}`);
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
  }

  find(root, value) {
    if (!this.root) {
      return null;
    }

    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
        if (currentNode.children[i].value === value) {
          return currentNode.children[i].value;
        }
      }
    }
    return undefined;
  }

  stringChildren(root) {
    if (!this.root) {
      return null;
    }

    const queue = new Queue();
    let kAryString = '';
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
        kAryString += currentNode.children[i].value.toString();
      }
    }
    return kAryString;
  }

  toArray(root) {
    if (!this.root) {
      return null;
    }
    const stack = new Stack();
    const newArray = [];

    stack.pushToTop(root);

    let currentNode = null;

    while (!stack.isEmpty()) {
      currentNode = stack.popOffTop();
      stack.pushToTop(currentNode);

      for (let i = 0; i < currentNode.children.length; i++) {
        stack.pushToTop(currentNode.children[i]);
      }
    }
    return newArray;
  }
}
