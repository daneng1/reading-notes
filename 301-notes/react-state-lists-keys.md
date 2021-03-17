# React Lifting up State

---

Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor. Let’s see how this works in action.

- We know that every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children.
- In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.
- There should be a single “source of truth” for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.
- Lifting state involves writing more “boilerplate” code than two-way binding approaches, but as a benefit, it takes less work to find and isolate bugs. Since any state “lives” in some component and that component alone can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom logic to reject or transform user input.
- If something can be derived from either props or state, it probably shouldn’t be in the state. For example, instead of storing both celsiusValue and fahrenheitValue, we store just the last edited temperature and its scale. The value of the other input can always be calculated from them in the render() method. This lets us clear or apply rounding to the other field without losing any precision in the user input.

# Lists and Keys

- In React, transforming arrays into lists of elements is nearly identical as in JavaScript.
- Below, we loop through the numbers array using the JavaScript `map()` function. We return a `<li>` element for each item. Finally, we assign the resulting array of elements to listItems:

```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
```
- Usually you would render lists inside a component.

- We can refactor the previous example into a component that accepts an array of numbers and outputs a list of elements.

```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

# Keys

- When you run the above code, you’ll be given a warning that a key should be provided for list items. A “key” is a special string attribute you need to include when creating lists of elements.
- Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity

```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

# Spread Operator

-Use the spread operator when you need to separate an array into arguments. For example, if we wanted to find the largest number in this array, add `...`:
```
Math.max(...[1,3,5]) // 5
```

Spread Operator is great for:
- Copying an array
- Concatenating or combining arrays
- Using Math functions
- Using an array as arguments
- Adding an item to a list
- Adding to state in React
- Combining objects
- Converting NodeList to an array
