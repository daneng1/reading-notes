# Trees

## Common Terminology

- Node - A Tree node is a component which may contain it’s own values, and references to other nodes
- Root - The root is the node at the beginning of the tree
- K - A number that specifies the maximum number of children any node - may have in a k-ary tree. In a binary tree, k = 2.
- Left - A reference to one child node, in a binary tree
- Right - A reference to the other child node, in a binary tree
- Edge - The edge in a tree is the link between a parent and child node
- Leaf - A leaf is a node that does not have any children
- Height - The height of a tree is the number of edges from the root to the furthest leaf

### Traversing a Tree

> Traversals are super important with trees because its how we search for a node, print out a values of the tree and much more. There are two kinds of traversals, depth and breadth.

- Depth starts at the lop level, then moves on the next level and so on until it gets to the last level.
- Breadth starts at the left side and works towards the right side.

### Depth Traversal

> There are three methods for depth traversal:

1. Pre-order: root >> left >> right
1. In-order: left >> root >> right
1. Post-order: left >> right >> root

- Depth traversal uses a call stack to track its location in the tree. 
- Starts with the root, ot top value, then looks at left value. If left value has children, it continues down the left values until left is null, all the while adding each value into the stack.
- Once the search has hit the bottom left, it moves up one level using the call stack, reads the right value and then pops the parent value. It moves up to the next value and reads right again. This happens until the stack is empty.
- At this point the left side of the root value has been read but not the right side, so the process continues on the right side of the root value.

### Breadth Traversal

> Breadth first traversal iterates through the tree by going through each level of the tree node-by-node.

- Traditionally, breadth first traversal uses a queue (instead of the call stack via recursion) to traverse the width/breadth of the tree.
- Starting at the root, we enqueue the value. 
- Then we can read the left and right values of the previous value and enqueue them.
- Next we dequeue the parent value and read the left and right values of the next value in the queue. Enqueue those and dequeue the parent. This continues until the whole tree has been traversed.

## K-ary Trees

> Binary trees are limited to two children of any node, left and right. K-ary tree nodes can have kth number of children, where k = 5 each node can have 5 children. 

- When traversing k-ary trees, you would use k to traverse through that number of potential children before moving on to the next node.
- Big O of time is O(n)

## Binary Search Trees

> These sort values based on if they are greater or less than the parent node, which allows up to find values much faster.

- If value is less than root node, it goes to the left. Greater than the root node and it goes to the right. This continues until it there are no more nodes to compare. 
- Searching is cut in half because each comparison will elimnate half of the potential matches.
- Big O of time is O(height), where height is how many levels the tree contains. 

[Back to Read Me](../README.md)
