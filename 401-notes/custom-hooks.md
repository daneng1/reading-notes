# Custom Hooks

## Questions

1. What does a component’s lifecycle refer to? Components have three phases in their lifecycle, mounting, updating and unmounting. These are just referring to how an element on the page is rendered and when it is rendered.
1. Why do you sometimes need to “wrap” functions in useCallback when called from within useEffect? It ensures that the function is not called everytime the component dependencies are re-rendered, preventing an infinite loop.
1. Why are functional components preferred over class components? Becasue they don't require the keyword "this" and hthey are lighter weight and can be faster.
1. What is wrong with the following code? 

```
import React, {useState, useEffect} from 'react';

function MyComponent(props) {
  const [count, setCount] = useState(0);

  function changeCount(e) {
    setCount(e.target.value);
  }

  let renderedItems = []

  for (let i = 0; i < count; i++) {
    useEffect( () => {
      console.log('component mount/update');
    }, [count]);

    renderedItems.push(<div key={i}>Item</div>);
  }

  return (<div>
     <input type='number' value={count} onChange={changeCount}/>
      {renderedItems}
    </div>);
}
```

> Use Effect can only be called at the top level of a function and never within a dif statement.

## Vocab 

- *state hook* - useState is a way for functional components to tap into state without needing to explicitly declare state.
- *effect hook* - useEffect is a tool to use side effects in functional components. This will compare dependency values against the previous render and if there is any differences, it will call your function.
- *reducer hook* - useReducer is used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second.

---

[Back to Read Me](../README.md)
