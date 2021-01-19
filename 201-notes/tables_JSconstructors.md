# Tables

## A table represents information in a grid format and is commoly used for reults, timetabls and schedules.

`<table>
  <tr>
    <td>15</td>
    <td>30</td>
  </tr>
</table>  `

* This is the syntax for a table. `<table>` makes the table and `<tr>` is how you indicate a row of data. The `<td>` is the element that contains the actual data. Add a `<th>` at the beginning of the first `<tr>` to add headings.

* The colspan attribute can be used on a `<th>` or `<td>` element and indicates how many columns that cell should run across.

* The rowspan attribute can be used on a `<th>` or `<td>` element to indicate how many rows a cell should span down the table.

* For long tables you can split the table into a `<thead>`, `<tbody>`, and `<tfoot>`.

--- 

# Constructors 

Constructors allow you to create Objects in a more streamlined way. You can create an empty object and then populate it with data later.

`function Hotel(name, rooms, booked){
    this.name = name;
    this.roooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
      return this.rooms - this.booked;
    }
}`


## THIS (IT IS A KEYWORD)
***The keyword this is commonly used inside functions and objects. Where the function is declared alters what this means. It always refers to one object, usually the object in which the function operates.***


* Functions allow you to group a set of related statements together that represent a single task.
* Functions can take parameters (informatiorJ required to do their job) and may return a value.
* An object is a series of variables and functions that represent something from the world around you.
* In an object, variables are known as properties of the object; functions are known as methods of the object.
* Web browsers implement objects that represent both the browser window and the document loaded into the browser window.
* JavaScript also has several built-in objects such as String, Number, Math, and Date. Their properties and methods offer functionality that help you write scripts.
* Arrays and objects can be used to create complex data sets (and both can contain the other).


---


[Back to Read Me](../README.md)