# Graphs

## Definition

> A graph is a non-linear data structure that can be seen as a collection of vertices (nodes) that may be connected by line segments called edges.

## Common Vocab

1. Vertex - A vertex, also called a “node”, is a data object that can have zero or more adjacent vertices.
1. Edge - An edge is a connection between two nodes.
1. Neighbor - The neighbors of a node are its adjacent nodes, i.e., are connected via an edge.
1. Degree - The degree of a vertex is the number of edges connected to that vertex.

## Structure

> Directed vs Undirected

- this defines if the vertices connected bi-directionally or not. If they are bi-directionally connected then it is an undirected graph. If the graph has specific directions to another veritcee, then it is directed.

> Complete vs Connected vs Disconnected

- a complete graph means that all vertices are connected to all other vertices. 
- a connected graph means that all vertices are connected to atleast one other verticee.
- a disconnected graph means that one or more vertices are not connected to any other vertices.

> Acyclic vs Cyclic

- acyclic is when a direectional graph does not have cycles meaning that it is not circular when traversing it.
- cyclic means that when it is traversed, eventually you will end up back at the first verticee.

## Traversing Graphs

> Breadth First

- In a breadth first traversal, you are starting at a specific vertex/node. This node must be specified when calling the BreadthFirst() method. 
- The breadth-first traversal of a graph is like that of a tree, with the exception that graphs can have cycles. 
- Traversing a graph that has cycles will result in an infinite loop….this is bad. To prevent such behavior, we need to have some way to keep track of whether a vertex has been “visited” before. 
- Upon each visit, we’ll add the previously-unvisited vertex to a visited set, so we know not to visit it again as traversal continues.

*Here is what the algorithm breadth first traversal looks like:*

1. Enqueue the declared start node into the Queue.
1. Create a loop that will run while the node still has nodes present.
1. Dequeue the first node from the queue
1. If the Dequeue‘d node has unvisited child nodes, add the unvisited children to visited set and insert them into the queue.

> Depth First

- In a depth first traversal, we approach it a bit different than the way we do when working with a depth first traversal of a tree. Similar to how the breadth-first uses a queue, we are going to use a Stack for our depth-first traversal.

*The algorithm for a depth first traversal is as follows:*

1. Push the root node into the stack
1. Start a while loop while the stack is not empty
1. Peek at the top node in the stack
1. If the top node has unvisited children, mark the top node as visited, and then Push any unvisited children back into the stack.
1. If the top node does not have any unvisited children, Pop that node off the stack
repeat until the stack is empty.

---

[Back to Read Me](../README.md)
