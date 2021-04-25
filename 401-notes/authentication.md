# Authentication

1. Explain what a “Singleton” is (in Computer Science terms).

- The singleton design pattern restricts the instantiation of a class to a single instance. This is done in order to provide coordinated access to a certain resource, throughout an entire software system. Through this design pattern, the singleton class ensures that it’s only instantiated once, and can provide easy access to the single instance.

1. Explain how the Singleton pattern can be used with Node modules, specifically with classes.

- Compared to global variables, singletons have the following benefits:
  - Singleton instance fields don’t take up space in the global namespace
  - Singletons may be lazily initialized (to be discussed further)
- Primarily due to the fact that a singleton holds an instantiated object, whereas static classes do not, singletons have the following advantages over static classes:
  - Singletons can implement interfaces
  - Singletons can be passed as parameters
  - Singletons can have their instances swapped out (such as for testing purposes)
  - Singletons can be handled polymorphically, so there may exist multiple implementations
  *Source:[Better Programming](https://betterprogramming.pub/what-is-a-singleton-2dc38ca08e92)*

1. If you were tasked with building a middleware system like Express uses, what approach might you take to construct/operate it?

### Definitions

1. Router Middleware - middlware is a piece of code that comes between the client and server and has access to the request and response. It can modify the request and add information or modify it.
1. Dynamic Module Loading - Dynamic loading is a mechanism by which a computer program can, at run time, load a library (or other binary) into memory, retrieve the addresses of functions and variables contained in the library, execute those functions or access those variables, and unload the library from memory. *Source: [Wikipedia](https://en.wikipedia.org/wiki/Dynamic_loading)*
1. Singleton Pattern - the singleton pattern is a software design pattern that restricts the instantiation of a class to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system. The term comes from the mathematical concept of a singleton.*Source: [Wikipedia](https://en.wikipedia.org/wiki/Dynamic_loading)*
1. CRUD -> REST Method Matches

  | CRUD  | REST     |
  |:---   |      ---:|
  | Create |  Post |
  | Read  |   Get|
  | Update | Put |
  | Delete | Delete|
  

5. Mock Testing - Mock testing is an approach to unit testing that lets you make assertions about how the code under test is interacting with other system modules. In mock testing, the dependencies are replaced with objects that simulate the behaviour of the real ones.