# Socket.io

### Questions

1. *What is the benefit of transforming data into packets?* - Packets are the basic units of communication over a TCP/IP network. Devices on a TCP/IP network divide data into small pieces, allowing the network to accommodate various bandwidths, to allow for multiple routes to a destination, and to retransmit the pieces of data which are interrupted or lost. Each piece is a packet, a term interchangeable with datagram.
1. *UDP is often referred to as a connectionless protocol. Why is this?* - UDP is a connectionless protocol. No connection needs to be established between the source and destination before you transmit data. UDP does not have a mechanism to make sure that the payload is not corrupted. As a result, the application must take care of data integrity all by itself.
1. *Can a socket server application have multiple socket connections?* - A server socket listens on a single port. All established client connections on that server are associated with that same listening port on the server side of the connection. An established connection is uniquely identified by the combination of client-side and server-side IP/Port pairs. Multiple connections on the same server can share the same server-side IP/Port pair as long as they are associated with different client-side IP/Port pairs, and the server would be able to handle as many clients as available system resources allow it to.
1. *Can a socket connection application be connected to multiple socket servers?* - Yes, you can create a server socket that can handle multiple clients simultaneously.This is done by having the listening socket fork() a child process whenever a request from the client occurs and this child process will connect to the client acting as a server and thus this becomes a connected socket while one main listening socket always handles other clients.
1. *Can an application be both a socket server and a socket connection?* - uncertain

### Vocabulary

 - *Observer Pattern* - The observer pattern is a software design pattern in which an object, named the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.
 - *Listener* - An event listener is a procedure or function in a computer program that waits for an event to occur. Examples of an event are the user clicking or moving the mouse, pressing a key on the keyboard, disk I/O, network activity, or an internal timer or interrupt.
 - *Event Handler* - Event handlers can be used to handle and verify user input, user actions, and browser actions: Things that should be done every time a page loads. Things that should be done when the page is closed. Action that should be performed when a user clicks a button. Content that should be verified when a user inputs data.
 - *Event Driven Programming* - n computer programming, event-driven programming is a programming paradigm in which the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or message passing from other programs or threads.
 - *Event Loop* - In computer science, the event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program.
 - *Event Queue* - An event queue is a repository where events from an application are held prior to being processed by a receiving program or system. Event queues are often used in the context of an enterprise messaging system.
 - *Call Stack* - a stack data structure that stores information about the active subroutines of a computer program.
 - *Emit/Raise/Trigger* - unsure
 - *Subscribe* - arrange to receive something regularly
 - *database* - a structured set of data held in a computer, especially one that is accessible in various ways.

 [Back to Read Me](../README.md)
