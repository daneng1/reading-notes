# Context API

## Questions

- Describe use cases for useMemo() and useReducer().
    - useMemo() memorizes the result of a function call between renders. This helps with performance when you are rendering large amounts of data.
    - useReducer() is preferred over useStatewhen your state logic is complex. 
- Why do custom hooks need the use prefix?
    - This is used for automatically checking violation of React Hook rules. Without it, React doesn't know that it is a hook.
- What do custom hooks usually do?
  - they allow for a clearen code when we have common functions across multiple files.
- Using any list of custom hooks, research and name one that you think will be useful in your applications.
  - useContext looks cool but I have no idea how to use it.
- Describe how a hook that fetches API data might work.
  - it would contain methods for each call and then you would likely use useEffect to call the API and use the returned data.

## Vocab

- *reducer* - this is a hook that can be used in place of useState and it is better at dealing with complex logic

---

 [Back to Read Me](../README.md)
