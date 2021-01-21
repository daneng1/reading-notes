# Forms

## Forms allow users to input data and for developers to use that data to inform the site experience.

* In addition to enabling users to search, forms also allow users to perform other functions online. You will see forms when registering as a member of a website, when shopping online, and when signing up for newsletters or mailing lists.

### Adding Text

* You will see text inout, password input and txt area forms along with radio buttons, checkboxes and drop-down boxes for input options.

### Submitting and Uploading

* Commonly used are submit buttons, image buttons and file upload boxes.

* `<form>` Form controls live inside a `<form>` element. This element should always carry the action attribute and will usually have a method and id attribute too.

* action - Every <form> element requires an action attribute. Its value is the URL for the page on the server that will receive the information in the form when it is submitted.
* method - forms can be sent using two method: get or post. 
    * ***Get*** method adds the values to the url and is ideal for short forms, when you are retrieving data from a server. 
    * ***Post*** are sent in HTTP headers and should be used when you allow a user to upload a file, the form is long, the form contains sensitive data or adds/deletes data from a database. 
* ID - use this to identify the form distinctly from other elements on the page.    

---

### Text Input

* Text - type='text', set size, name and max length
* Password -  type='password', set name, size and max length
* Text Area - open text field using `<textarea>`
* Radio - type='radio' set name, value and checked
* Checkbox - type='checkbox', set name, value, checked

---

# Lists

* List-stlye-type allows you to change the shape of the bullet point.
* You can use images for bullets by adding a url.
* List style shorthand can be used to express marker style, image, postion properties
* List markers can be given different appearances using the list-style-type and list-style image properties.
* Table cells can have different borders and spacing in different browsers, but there are properties you can use to control them and make them more consistent.
* Forms are easier to use if the form controls are vertically aligned using CSS.
* Forms benefit from styles that make them feel more interactive.

# Tables

* hide empty cells by using `empty-cells: hide or show`
* Border spacing can be set by using `border-collapse: collase`

---

# Events

* Scripts usually respond to events by updating the content of the web page (via the Document Object Model) which makes the page feel more interactive.

### Common Events that occur in the browser:

* Load - web page is finished loading
* Unload - webpage is unloading, due to a new page being requested
* Error- browser encounters a JavaScript error
* Resize- browser window is resized
* Scroll- user has scrolled up or down


### Events Fire or are Raised

When the user interacts with the HTML, there are three steps involved in triggering the JS code. These are called Event Handling.

1. Select the element(node) you want the script to respond to.
1. Indicate which event on the selected node will trigger the response.
1. State the code you want to run when the event occurs.

>`element.onevent = functionName;` is the tradional DOM method for event handlers

*Event Listeners*

* Event listeners are a more recent approach to handling events. They can deal with more than one function at a time but they are not supported in older browsers.

>`elemetn.addEventListener('event', functionName [, Boolean]);`

---


[Back to Read Me](../README.md)