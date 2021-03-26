# JavaScript Call Stack

### The JavaScript engine (which is found in a hosting environment like the browser), is a single-threaded interpreter comprising of a heap and a single call stack. The browser provides web APIs like the DOM, AJAX, and Timers.


- The call stack is primarily used for function invocation (call). Since the call stack is single, function(s) execution, is done, one at a time, from top to bottom. It means the call stack is synchronous.
- In Asynchronous JavaScript, we have a callback function, an event loop, and a task queue. The callback function is acted upon by the call stack during execution after the call back function has been pushed to the stack by the event loop.
- Call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).

### What causes a stack overflow?
A stack overflow occurs when there is a recursive function (a function that calls itself) without an exit point. The browser (hosting environment) has a maximum stack call that it can accomodate before throwing a stack error.

## Understanding Errors

>Reference Errors

- This is as simple as when you try to use a variable that is not yet declared you get this type os errors.
```
console.log(foo) // Uncaught ReferenceError: foo is not defined
```
- This is also a common thing when using const and let, they are hoisted like var and function but there is a time between the hoisting and being declared so when you try to access them a reference error occurs, the fact that this happens to let and const is called Temporal Dead Zone (TDZ).

>Syntax errors
- This occurs when you have something that cannot be parsed in terms of syntax, like when you try to parse an invalid object using JSON.parse.
```
JSON.parse( {'foo': 'bar'} ) // Uncaught SyntaxError: Unexpected token o in JSON at position 1
```
- This can be solved by just fixing the syntax, in this case the object should be a JSON.
>Range errors
- Try to manipulate an object with some kind of length and give it an invalid length and this kind of errors will show up.
```
var foo= []
foo.length = foo.length -1 // Uncaught RangeError: Invalid array length
```
>Type errors
- Like the name indicates, this types of errors show up when the types (number, string and so on) you are trying to use or access are incompatible, like accessing a property in an undefined type of variable.
```
var foo = {}
foo.bar // undefined
foo.bar.baz // Uncaught TypeError: Cannot read property 'baz' of undefined
```

Source: [codeburst.io](https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c)

---
[Back to Read Me](../README.md)
