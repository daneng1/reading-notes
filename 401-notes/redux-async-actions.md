# Redux - Asynchronous Actions

## Questions

1. How granular should your reducers be? They should not be granular, rather they should be as broad as possible so that you can use them in more places.
1. Pro or Con – multiple reducers can “fire” when a commonly named action is dispatched. Pro and Con. It could be helpful in that you don't need to create unique names for each action but it could also cause side-effects that are hard to trace.
1. Name a strategy for preventing the above. Put all your actions in one file and all your reducers in another file, that way you won't have duplicate action names.

## Vocab

- *store* - The Redux store brings together the state, actions, and reducers that make up your app.
- *combined reducers* - The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

---

[Back to Read Me](../README.md)
