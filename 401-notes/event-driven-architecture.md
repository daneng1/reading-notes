# Event Driven Architecture

> Event-driven architecture (EDA) is a software architecture paradigm promoting the production, detection, consumption of, and reaction to events. An event can be defined as "a significant change in state". For example, when a consumer purchases a car, the car's state changes from "for sale" to "sold".

## Questions

1. What’s the difference between a FIFO and a standard queue? - FIFO queues have essentially the same features as standard queues, but provide the added benefits of supporting ordering and exactly-once processing. FIFO queues provide additional features that help prevent unintentional duplicates from being sent by message producers or from being received by message consumers.
1. How can the server be assured a message was properly received? - the client will respond with an acknowledgement.
1. What classic design pattern is best represented by event driven programming? - observer pattern, which is a software design pattern in which an object, named the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.
1. How do you test an event driven system? - you will write unit tests, service tests, and end-to-end tests. In each of these cases, your System Under Test (SUT, what is actually being tested) comprises a different part of your application.

---

## Vocab

- *FIFO Queue* - In computing and in systems theory, FIFO is a method for organising the manipulation of a data structure where the oldest entry, or "head" of the queue, is processed first.
- *Pub/Sub* - a form of asynchronous service-to-service communication used in serverless and microservices architectures. In a pub/sub model, any message published to a topic is immediately received by all of the subscribers to the topic.

[Back to Read Me](../README.md)
