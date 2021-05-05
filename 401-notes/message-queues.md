## Message Queues

---

### Questions

1. What does it mean that web sockets are bidirectional? Why is this useful? - It means that the sever can communitcate with the client, in addition to the standard client to server communication. This is useful for when you want to send frequent updates fromt he server.
1. Does socket.io use HTTP? Why? - No. it used Web Sockets because they can handle info bi-directionally.
1. What happens when a client emits an event? - The event is published and sent out to any subscribers.
1. What happens when a server emits an event? - The subscribers that are listening for the event will receieve the data from the event.
1. What happens if a client “misses” an event? - I am not sure
1. How can we mitigate this?

---

### Vocab

- *Socket* - A socket is a combination of port and IP address
- *Web Socket* - WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. 
- *Socket.io* - Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server. It consists of: a Node. js server: Source | API. a Javascript client library for the browser (which can be also run from Node.
- *Client* - a desktop computer or workstation that is capable of obtaining information and applications from a server.
- *Server* - a computer or computer program which manages access to a centralized resource or service in a network.
- *OSI Model* - The OSI Model (Open Systems Interconnection Model) is a conceptual framework used to describe the functions of a networking system. The OSI model characterizes computing functions into a universal set of rules and requirements in order to support interoperability between different products and software.
- *TCP Model* - TCP/IP, in full Transmission Control Protocol/Internet Protocol, standard Internet communications protocols that allow digital computers to communicate over long distances. TCP/IP was developed in the 1970s and adopted as the protocol standard for ARPANET (the predecessor to the Internet) in 1983.
- *UDP* - Stands for "User Datagram Protocol." It is part of the TCP/IP suite of protocols used for data transferring.
- *Packets* - a block of data transmitted across a network.

---

[Back to Read Me](../README.md)
