# Object Literals and DOM

## What are objects?

* Objects group together a set of variable and functions to create a model of somethingyou would see in the real world.
* In an object, Variables become known as Prperties.
  * Property = Variable
* In an Object, Functions become known as Methods
  * Methods = Functions

> `var hotel = {name:Hilton Seattle, rooms:250, bookedRooms:45, gym:true, pool:true, roomTypes:['twin', 'double', 'suite'], checkAvailability:functio() {return this.rooms - this.bookedRooms}
}`

* This code contains all the properties of the Hilton Seattle and will return the number of open rooms.
* You can access the Object and its Properties through dot notation.

>`var hotelName = hotel.name;`

* The new varriable hotelName is looking at the object "hotel" and the property "name".

---

## DOM or Document Object Model

### DOM is a way yot specify how browsers should create a model of an HTML page and how JS can access and update the contents.

### DOM Tres is a model of a webpage and assigns node to each piece of the page. 
 
 * Document Node is representative of the whole page
 * Element Node is for elements on the page like `<div>, <body>, <h1>,` etc.
 * Attribute Node is for any attribute assigned to an element like `<class>` or `<id>`
 * Text Node is for the actual text that is displayed on the page

## Using the DOM Tree to Access the Nodes

1. Accessing the Nodes - 
***Here are some common methods used to access the DOM nodes.***
`getElementID()` is very common and looks for the element tagged with a specific ID.
`querySelector()` looks for a CSS selector and returns the first match.
`getElementsByClassName()` looks for all elements with a common class.

1. Work with the Elements - ***DOM uses Nodes as representing an elemenet but it doens't contain the content of the element.***
`nodeValue()` lets you access and update the contents of a node
`createElement` will make a new blank element
`hasAttribute()`, `getAttribute()`, `setAttribute` and `removeAttribute` will add, get, set and remove an attirbute from the CSS

1. Using Node Lists - ***When  a DOM method can return more than one value, it returns a Node List.***
    1. Node Lists act like arrays and will store multiple values.
    1. The `length` property tells you how many items are in a list.
    1. The `item()` method returns a a specific node from the node list when you tell it he index number
    1. You can select nodes using the class attributes. Put the class name in ' ' because it is a sting.

1. Traversing through the DOM - ***There are three main ways to navigate the DOM tree and update content.***
    1. `document.write()` is a quick and simple way to add content that wasn't in the original source code, but its use is rarely advised. 
    1. `element.innerHTML` lets you update the entire content including the markup as a string. For example `<a href="google.com">` could be replaced by using this technique.
    1. DOM manuipulation is the third technique and it uses a set of methods and properties to access, create and update the elements and text nodes. 

1. Cross-site Scripting (XSS) - ***Adding HTLM to a page can be risky and can open your page to an attacker.***
    1. Always validate input to be sure users aren't entering incorrect characters.
    1. Double check validation to the server before displaying user content/storing it in a database.
    1. The database may safely contain markup and script from trusted sources

---


[Back to Read Me](../README.md)    