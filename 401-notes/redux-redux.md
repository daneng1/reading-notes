# Redux - Additional Topics

## Questions 

1. What’s the best practice for “pre-loading” data into the store (on application start) in a Redux application? *I believe that you should use useEffect to load the data from the API on page load. The useEffect should call a function that contains e.preventDefault and a call to the action.*
1. When using a thunk/async action that dispatches the actual action, which do you export from your reducer? *You export the async action and that will dispatch the response data to your action which will send the data to the reducer*

## Vocab

- *middleware* - a piece of software that takes the request data and modifies it before sending it along to the API
- *thunk* - Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

---

[Back to Read Me](../README.md)
