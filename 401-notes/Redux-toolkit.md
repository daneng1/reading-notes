# Redux Toolkit

## Questions

1. Compare and Contrast Redux Toolkit with Redux “Ducks”.
    1. Redux Toolkit includes a powerful data fetching and caching capability that we've dubbed "RTK Query". It's included in the package as a separate set of entry points. It's optional, but can eliminate the need to hand-write data fetching logic yourself.
    1. It also includes  several API's like `configureStore()`, `createReducer()`, `createAction()`, `createSlice()`, and `createAsyncThunk`
    1. Ducks is simply a strategy of combining all of the actions, reducers and store into a single file rather than having them spread out over several files.

1. What is the principle advantage of Redux Toolkit?
    1. It was originally created to help address three common concerns about Redux:
        - "Configuring a Redux store is too complicated"
        - "I have to add a lot of packages to get Redux to do anything useful"
        - "Redux requires too much boilerplate code"

## Vocab

- *Redux toolkit slices* - The name “slice” comes from the idea that we’re splitting up the root Redux state object into multiple “slices” of slate.
- *namespace* - A namespace is used in chat or event based applications where a user would register to be part of a specific Namespace that could be associated with a work or personal group.

---

[Back to Read Me](../README.md)
