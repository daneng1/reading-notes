# HTML Lists

There are three kinds of lists that we can use in HTML, ordered, unordered and definition lists.

**Ordered Lists** are numbner lists and show a step-by-step process like a recipe or repair inmstructions. They use the `<ol>` tag in HTML.

**Unordered Lists** are non-numnered lists and sometimes have bullets. Unordered lists use `<ul>` tags in HTML.

Each item in both ordered and unordered lists use the `<li>` tag. You can also nest `<li>` lists inside `<li>` lists.


**Definition Lists** are used for defining a term andtypically include the term and its definition. Use `<dl>` to create a definition list. To contain the term being defined, use `<dt>`.

---

# CSS Boxes

All content on a page sits inside a box, even if you can't see the box. CSS can control how the box is viewed, where is shows up and the style of the contents in the box. Here are some common box tags in CSS:


`height:` sets the hight on the box

`width:` sets the width of the box

`min-width:` sets a minimum width even when the browser is resized

`min-height:` sets a minimum height even when the browser is resized

`max-width:` sets a maximum width even when the browser is resized

`max-height:` sets a maximum height even when the browser is resized

`overflow:` tells the browser what to do if the content of the box is too large for the box

`border:` every box has a border even if it's not visible and this can be changed here

`margin:` is the space between the border and other boxes

`padding:` is the space between the content and the border

`border:` width, style and color can all be set in one line

`border-radius:` will round the corners of the box

`text-align:` will align the box on the page

`display:` will set the content to block or inline regardless of it's tags

---

# Arrays

An array is a special variable in that it can hold multiple values and can even hold multiple types of values. 

### Creating an Array

```Javascript

let colors = ['white', 'black', 'red'];
```

Use the square brackets [] instead of the curly brackets {} for an array.

---

# JavaScript Conrol Flow

## Switch Statements
These are used when you have many different statements for the script to compare. They are faster and more robust than using a bunch of `if` statements. 

```javascript
let level = 0;
switch (level) {
  case 'One':
    Title = 'Level 1';
    break;

 case 'Two':
    Title = 'Level 2';
    break;

  case 'Three':
    Title = 'Level 3';
    break;

  default:
    Title = 'Back to Home';
    break;
}
```
## Truthy/Falsy and Type Coercion

JavaScript is said to use weak typing and can convert data behind the scenes so that it makes sense of an operation rather than present an error. This can be an issue with unexpected values in your data.JavaScript can make every value true or false due to coercion which can create Truthy and Falsy values.

## Loops

Loops check a condition. If it returns true, a code block will run. Then the condition is checked again and if it is true again it will run the code block again.

There are three type of loops, **FOR, WHILE and DO WHILE**.

- FOR = run a code a specific number of times.
- WHILE = run a code an unknown number of times and it will continue to run as long as the condition is true.
- DO WHILE = similar to WHILE but will run atleast once even if the result is false.

### Loop Counters

A FOR loop uses a counter as a condition and instructs the code to run a specific number of times. 

>`for (var i =0; 1 <10; i++) {
    document.write(i);
}`

- Initialization - create a variable and set it to zero `var i =0`
- Condition - run the loop until it reaches this counter `1 <10`
- Update - every time the loop runs, add 1 to the counter `i++`

A WHILE loop repeats a chunk of code as long as a particular condition is true, in other words, while the condition is true.


---


[Back to Read Me](../README.md)