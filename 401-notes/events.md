# Event Driven Programming

> Event-Driven Programming is a logical pattern that we can choose to confine our programming within to avoid issues of complexity and collision. In this article we’re going to go over how Event-Driven Programming works and how we can make the best use of it in our Node.js projects.

- Most obvious use of event-driven programming is in the web browser. Every time you click on a link, hover over an image or interact with elements of the page, you are using an event listener.

- Node.js has a native event listener called eventEmitter.
- We access the EventEmitter class through the events module. Once imported we’ll need to create a new object from the class to start using it.

```
const EventEmitter = require('events').EventEmitter;
const myEventEmitter = new EventEmitter;
```

- In a chat room, maybe you want to notify all the participants every time a new user joins the chat room. You could use eventEmitter and write a function that would trigger an event every time someone joins the room.

```
const EventEmitter = require('events').EventEmitter;
const chatRoomEvents = new EventEmitter;

function userJoined(username){
  alertAllUsers('User ' + username + ' has joined the chat.');
}

chatRoomEvents.on('userJoined', userJoined);
```

- Event listeners can also be removed using the `removeListener` method in node.js.

```
chatRoomEvents.removeListener('message', displayMessage);
```

*Source [digitalocean.com](https://www.digitalocean.com/community/tutorials/nodejs-event-driven-programming)*

[Back to Read Me](../README.md)
