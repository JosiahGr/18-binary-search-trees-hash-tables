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
});

