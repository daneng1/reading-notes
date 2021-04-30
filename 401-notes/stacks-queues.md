# Stacks and Queues

## Commonalities

- Both are linear data structures meaning one element follows another and so on
- Both are flexible in size, add more as you go or shrink
- Big O(1) for all actions

## Stacks

- LIFO data structure (last in, first out)
- Think of it like a stack of plates, put a new one on top and remove that one first.

### Common Stack Terms

- Push - use this to add nodes to the stack
  - create new node, set top next to new node and set new node to top
- Pop - use this to remove a node from the stack
  - set temp to top node, re-assign top to value of next, the set old node next to null
- Top - this is the top of the node
- Peek - view the top node of the stack
- IsEmpty - true when stack is empty

## Queue

- FIFO data structure (first in, first out)
- Think of it as a line for a movie theatre, the first person in line is the first person removed.

### Common Queue Terms

- Enqueue - add a node to the rear of the queue
  - change the rear node next to point to new node, set new node to rear
- Dequeue - remove a node from the front of the queue
  - create temp reference to front node, re-assign front to the next value that the front is referencing, re-assign next of temp node to null
- Peek - inspecing the front of the queue
- IsEmpty - returns true if empty

[Back to Read Me](../README.md)
