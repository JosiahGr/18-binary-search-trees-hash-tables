'use strict';

import KAryNode from '../lib/kary-node';
import KAryTree from '../lib/kary-tree';

describe('kary-tree.js', () => {
  test('#stringChildren should return the values of all children in a string', () => {
    const one = new KAryNode(1);
    one.appendChild(2);
    one.appendChild(3);
    one.appendChild(4); 

    one.children[1].appendChild(5);
    one.children[1].appendChild(6);
    one.children[1].appendChild(7);

    one.children[1].children[1].appendChild(8);

    const kAryTree = new KAryTree(one);
    expect(kAryTree.stringChildren(kAryTree.root)).toEqual('2345678');
  });
  test('#stringChildren should return undefined if tree is empty', () => {
    const emptyTree = new KAryTree(null);
    expect(emptyTree.stringChildren(emptyTree.root)).toEqual(null);
  });

  test('#find should traverse through a tree and return the first node that has that value', () => {
    const one = new KAryNode(1);
    one.appendChild(2);
    one.appendChild(3);
    one.appendChild(4); 

    one.children[1].appendChild(5);
    one.children[1].appendChild(6);
    one.children[1].appendChild(7);

    one.children[1].children[1].appendChild(8);

    const kAryTree = new KAryTree(one);
    expect(kAryTree.find(kAryTree.root, 2)).toEqual(2);
    expect(kAryTree.find(kAryTree.root, 7)).toEqual(7);
    expect(kAryTree.find(kAryTree.root, 8)).toEqual(8);
  });
  test('#find should return null if tree is empty', () => {
    const emptyTree = new KAryTree(null);
    expect(emptyTree.find(emptyTree.root, 3)).toEqual(null);
  });
  test('#toArray should perform a depth first traversal and push trees elements to an array', () => {
    const one = new KAryNode(1);
    one.appendChild(2);
    one.appendChild(3);
    one.appendChild(4); 

    one.children[1].appendChild(5);
    one.children[1].appendChild(6);
    one.children[1].appendChild(7);

    one.children[1].children[1].appendChild(8);

    const kAryTree = new KAryTree(one);
    expect(kAryTree.toArray()).toEqual([1, 4, 3, 7, 6, 8, 5, 2]);
  });
});
