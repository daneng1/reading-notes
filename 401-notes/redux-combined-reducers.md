# Redux - Combined Reducers

## Questions

1. Why choose Redux instead of the Context API for global state? Context API is great for small applications where state changes are minimal but Redux is better for large applications where there are many changes to state. Redux also offer time-travel and single source of truth for state.
1. What is the purpose of a reducer? Reducer is a pure function that takes the previous state and an action and returns the next state.
1. What does an action contain? It is an object that contains a type and a payload.
1. Why do we need to copy the state in a reducer? Because state is immutable and can't be directly modified.

## Vocab

- *immutable state* - If something is "immutable", it can never be changed. State is immutable in that it can't be changed directly but can be copied and changed.
- *time travel in redux* - The Redux DevTools records dispatched actions and the state of the Redux store at every point in time. This makes it possible to inspect the state and travel back in time to a previous application state without reloading the page or restarting the app.
- *action creator* - The only way to change the state is to dispatch an action, an object that describes what happened.
- *reducer* - Reducers are pure functions that take the previous state and an action, and return the next state. Like any other functions, you can split reducers into smaller functions to help do the work, or write reusable reducers for common tasks.
- *dispatch* - he Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. 

[source](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)

---

[Back to Read Me](../README.md)
