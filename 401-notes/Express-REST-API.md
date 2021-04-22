# Express REST API

---

### Questions

1. Name 3 real world use cases where you’d want to change the request with custom middleware?
Adding username, encrypting a password, adding a date/time stamp
1. True or false: The route handler is middleware?
True. Route handling is part of the middleware.
1. In what ways can a middleware function end the process and send data to the browser?
By Calling `.end()` or `next()`.
1. At what point in the request lifecycle can you “inject” middleware?
Middleware happens bewtween the client and the server during the request.
1. What can cause express to error with “Request headers sent twice, cannot start a second response”?
The response hanlders were sent more than once from the same handler.

---

### Definitions

1. Middleware - software that acts as a bridge between an operating system or database and applications, especially on a network.
1. Request Object - The request object is the main entry point for an application to issue a request to the Library - all operations on a URL must use a Request object. ... A request object is registered in the library by issuing an operation on a URL - for example PUT, POST, or DELETE.
1. Response Object - The Response interface of the Fetch API represents the response to a request.
1. Application Middleware - Middleware is software that provides common services and capabilities to applications outside of what's offered by the operating system. Data management, application services, messaging, authentication, and API management are all commonly handled by middleware.
1. Routing Middleware - middleware that lives on a specific route rather than every route.
1. Test Driven Development - write tests first then write code, then refactor code
1. Behavioral Testing - BDD uses human-readable descriptions of software user requirements as the basis for software tests.

[Back to Read Me](../README.md)
