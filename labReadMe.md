## Authors
Josiah Green and Cara Ottmar

## Version
1.0.0

## Architecture
NPM installs
Build your binary tree, node.js, traversals, and kary-node. Be sure to import and export.

README.md - contains documentation
.env - contains env variables (should be git ignored)
.gitignore - contains a robust `.gitignore` file
.eslintrc.json - contains the course linter configuration
.eslintignore - contains the course linter ignore configuration
.travis.yml - for testing
package.json - contains npm package config
  - create a `test` script for running tests
  - create `dbon` and `dboff` scripts for managing the mongo daemon
index.js - entry-point of the application
src/ - contains the remaining code
src/lib/ - contains module definitions
src/model/ - contains module definitions
src/route/ - contains module definitions
src/\_\_test\_\_/ - contains test modules
main.js - starts the server

## Feature Tasks
1.Add a `remove(value)` method to the BinarySearchTree class presented in class.

2.Implement a K-ary-Tree Class
  A. implement the following prototype methods
    1.`find(value)` should iterate over all child nodes using a breath-first traversal and return the first node that has that value, it should return null if a node with the value is not found
    2.`toString(str)` should iterate over all child nodes using a breath-first traversal and concatenate their values separated by newlines in to a string
    3. `toArray(array)` should use a depth-first traversal and push all the tree's elements into an array.

## Change Logs
May-9-2018 - forked lab and began working on feature tasks
May-9-2018 - Worked to complete the find method
May-9-2018 - Created two tests for find method
May-9-2018 - ADded toString method
May-9-2018 - Created two tests for toString method
May-9-2018 - Worked on toArray Method -- did not complete
May-12-2018 - Completed toArray method and testing
May-12-2018 - Built 'remove' method and worked on testing

## Big 0
remove:
  Time: O(H)
  Space: O(H)
toString:
  Time:O(H)
  Space: (H)
toArray:
  Time: O(H)
  Space: O(H2)
find: 
 Time: O(H) where H is the height of the tree
 Space: O(1) 

## Documentation
This program follows several data structures ( Binary Search Tree, Binary Tree, and a KAry Tree. ) To Install:

Binary Tree:

'use strict';

export default class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

KAry-Tree:
export default class KAryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  appendChild(value) {
    const nodeToAppend = new KAryNode(value);
    this.children.push(nodeToAppend);
  }
}

## Testing

Insure that npm is updated and Node is installed. To utilize the testing functionality for this package, type in
```npm run test```
in the terminal.