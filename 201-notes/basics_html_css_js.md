# Basics of HTML, CSS and JS

---

## HTML 

When creating a webpage you add tags to the contents of the page in HTML. These tags tell the browser how to display the content. 

Some common tags:

```html

<h1> Header
<p> Paragraph
<b> Bold
<i> Italic
<sup> Superscript
<sub> Subsrcipt
<br> Break

```
Some element tags are not intended to affect the structure of the page but instead add ectra information to the page. These are called **Semantic** markups.

```html
<strong> importance
<em> emphasis
<blockquote> longer page quotes
<q> shorter quotes in a paragraph
<abbr> abbreviations
<cite> referencing another work
<dfn> definition
<address> contact info

```
---

## CSS

CSS allows you to create specific rules for how you content is displayed, specificallt the style. CSS associates HTML elements with style rules and typically is written in a seperate document and is linked to the page insde the `<HEAD>`. CSS treats HTML like it is inside boxes.

```css

p { 
  font-family: Arial;
  color: black;
}
```
In this example, **p** is the same as the `<p>` tag in HTML and the font family and color indicate which font and color to apply to the text. All CSS rules live inside {}.

### CSS Selectors

Rules can be applied to element tags in a few different ways.

|         Selector |      Meaning                 |
|------------------|------------------------------|
|Univeral          | Applies to all elements in the document|
|Type              | Matches element names|
|Class             | Matches an element with the same class tag|
|ID                | Matches an element with the same ID but can only be used once
|Child             | Matches an element that is a direct child|

---
## JavaScript (JS)

* JS uses scripts or series of instructions for the computer to know what to do
* JS adds the function to websites and apps
* JS is also used on the back-end to affect behavoir on the front-end
* JS is an object oriented language

### How does it work?

JS uses Statements which are made up of Objects, Methods and Parameters to create instructions for the computer. 

JS uses a few types of data like **integers (number), strings (words) and booleans (true/false)** to create the functions.

### Variables

A variable is a way to store small bits of information to be used later in a script or other application. Every time a script runs, the data can vary, hence the name variable.

```JS
let quantity = 0;
```

This is a simple example of a variable and declaring it. "Let" tells JS that you are declaring a variable, in this case "quantity". The equal sign is an operator and just says that we are going to assign a value to "quantity" and the value is "0".

### Arrays

Arrays are special strings and can store more than one value.
```js
let colors = ['white', 'black', 'red'];
```

## Operators

### Comparison Operators

Evaluate a sitaution by comparing one value in the script to another value. The result is a Boolean or true/fale statement.

- `==` is equal to
- `===`strict equal to
- `!=`is not equal to 
- `!==`strict not equal to
- `>`greater than
- `<`less than
- `>=` greater than or equal
- `<=` less than or equal

### Logical Operators

While comparison operators usually return only one value, logical operators allow you to compare the results of more than one comparison operator.

- `&&` **Logical And** will test more than one condition
- `||` **Logical Or** tests atleast one condition
- `!` **Logical Not** this takes a single Boolean value and inverts it.

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