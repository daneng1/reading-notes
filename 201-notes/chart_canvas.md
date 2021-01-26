# Chart.js

## Charts are much better for displaying data than tables.

### Chart.js is a plugin that uses HTML5's elements to draw animated charts

* download chart.js and copy into your working directory.
* cretae a new HTML page and import the script.
* create an empty `<canvas></canvas>` element
* in the opening tag, add an id, width and height
* from here you can build charts in JavaScript and populate your data into the charts


# Canvas Element

## Canvas acts much like `<img>` except it downs't have  src or alt attributes

* it's a good idea to add am id to your `<canvas>` elemnent so you can easily target it 
* `<canvas>` element creates a fixed-size drawing surface that adds one or more rendering contexts, which are used to create and manipulate the content shown.
* initially the canvas is blank and you will need to add a script to display content
* canvas uses a grid layout and the top left is is positioned at coordiante 0.0
* canvas only uses rectangle and paths to draw shapes, but we can use combinations of those to draw complex shapes
* here is an example of a simple rectangle:
  > `function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}`

### Adding Colors

* we can easily add colors using `fillstyle` and `strokestyle` in JavaScript
* this example will fill the drawing with orange
  >`ctx.fillStyle = 'orange';`
* we can use for loops to draw a grid of rectangles and change the color in each loop
* we can do the same with the stroke

---


[Back to Read Me](../README.md)
