# REACT
  
###### https://reactjs.org/tutorial/tutorial.html cited for all content below 
---

### What is React?

> React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

- We use components to tell React what we want to see on the screen. When our data changes, React will efficiently update and re-render our components.
- A component takes in parameters, called props (short for “properties”), and returns a hierarchy of views to display via the render method.
- The render method returns a description of what you want to see on the screen. React takes the description and displays the result.
- You can put any JavaScript expressions within braces inside JSX. Each React element is a JavaScript object that you can store in a variable or pass around in your program.
- To “remember” things, components use state. React components can have state by setting *this.state* in their constructors.
- Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.

> Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.

> For example, class becomes className in JSX, and tabindex becomes tabIndex.



### Rendering Elements

---

- Applications built with just React usually have a single root DOM node, typically `<div></div>`.
- React elements are immutable. Once you create an element, you can’t change its children or attributes. 
- React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.


### Components and Props

---

- Components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.


[Back to Read Me](../README.md)