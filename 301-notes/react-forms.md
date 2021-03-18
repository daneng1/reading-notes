# React Forms

---

Forms in React work a little different than other DOM elements in React beacuse they naturally have some form of internal state.

- In React it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components”.

### Controlled Components

- In HTML forms typically maintain thier own state. In React, mutable state is typically kept in the state property of components, and only updated with setState().
- Combine the two to make React the singel source of truth and then that component renders a form and also controls what happens when more input is entered.This is a comtrolled component.

```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

- Since value is se on the form, display value will always be `this.state.value`. 
- Since `handleClick` runs on every keystroke, the display will be updated as the user types.

### `textarea` Tag

---

- `<textarea>` uses a value atribute instead and can be used very similar to a form that uses a single-line input.


### `select` Tag

---

- `<select>` creates a dropdown list.

### The file input Tag

---

- `<input type="file">` lets the user choose one or more files from their device to be uploaded to the server.

### Handling Multiple Inputs

---

- when you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of `event.target.name`.

### Controlled Input Null Value

---

- Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. If you’ve specified a value but the input is still editable, you may have accidentally set value to undefined or null.

- The following code demonstrates this. (The input is locked at first but becomes editable after a short delay.)

```
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```

[Back to Read Me](../README.md)