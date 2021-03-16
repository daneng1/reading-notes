# React State and Lifecycle

---

- React has a special built-in object called state, which allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.

```
class Test extends React.Component {
    constructor() {
        this.state = {
            id: 1,
            name: "test"    
        };  
    }    
    
    render() {    
        return (      
            <div>        
              <p>{this.state.id}</p>        
              <p>{this.state.name}</p>      
            </div>    
        );  
    }
}
```

- State should not be modified directly, but it can be modified with a special method called `setState()`.
- Changes in the state happen on user-input, triggering an event. React components are rendered based on the data in the state. 
- When state changes, React gets informed and immediately re-renders the DOM, but only the component that updated.


# Handing Events

---

Events are handled very simliar to the DOM but there are some syntax differences.
- React events use camel case instead of lowercase.


- use `{}` around a function like this to pass a function rather than a string.

```
<button onClick={activateLasers}>
  Activate Lasers
</button>
```
- You can not return false and so you must call `preventDefault` explicitly.
- When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.
- You have to be careful about the meaning of `this` in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind `this.handleClick` and pass it to `onClick`, this will be undefined when the function is actually called.


# Conditional Rendering

In React, you can create distinct components that encapsulate behavior you need. Then you can render only some of them, depending on the state of your application.

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like `if` or the conditional operator to create elements representing the current state, and let React update the UI to match them.

- You can also use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.
- You can use logical `&&` operator if an expression evaluates true it will run the followiuing code. But if it evaluates false, it will skip the code.

```
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}
```
- Use the ternary operator to test an inline if-else statement.
 ```
 render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

[Back to Read Me](../README.md)