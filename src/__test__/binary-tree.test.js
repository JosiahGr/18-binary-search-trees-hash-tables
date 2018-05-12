'use strict';

import Node from '../lib/node';
import BinarySearchTree from '../lib/binary-search-tree';

describe('Testing binary tree functions', () => {
  test('#insert should add a node in a Binary Search Tree', () => {
    const root = new Node(3);
    const tree = new BinarySearchTree(root);

    tree.insert(7);
    tree.insert(9);
    tree.insert(6);

    expect(tree.root.left).toBeNull();
    expect(tree.root.right.right.value).toEqual(9);
    expect(tree.root.right.value).toEqual(7);
    expect(tree.root.right.left.value).toEqual(6);
  });

  test('#delete remove the desired node from a binary search tree and replace with the smallest value in it\'s subtree', () => {
    let tree = null;
    const root = new Node(3);
    tree = new BinarySearchTree(root);

    tree.insert(1);
    tree.insert(7);
    tree.insert(9);
    tree.insert(6);
    tree.remove(7);

    expect(tree.root.right.right.value).toEqual(9);
    expect(tree.root.right.value).toEqual(6);
    expect(tree.root.right.left.value).toBeNull();
  });
});
