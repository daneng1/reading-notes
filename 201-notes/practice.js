
function Location(city, min, max, avg, hours) {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg; 
  this.hours = hours;
}

var seattle = new Location('Seattle', 23, 65, 6.3, hoursGlobal);
var tokyo = new Location('Tokyo', 3, 24, 1.2, hoursGlobal);
var dubai = new Location('Dubai', 11 ,38, 3.7, hoursGlobal);
var paris = new Location('Paris', 20, 38, 2.3, hoursGlobal);
var lima = new Location('Lima', 2, 16, 4.6, hoursGlobal);

  console.log(seattle.max);

var hoursGlobal = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];




var person = {
  name: 'Dan',
  speak: function() {
    console.log('Hey There');
  },
  greet: function() {
    console.log('My name is ' + this.name);
  },
}
person['name'];
person['greet'];


1/18/21 Review

var elementType = 'h2';
var content = 'Some content.';

function contentCreator(elementType, content){

  var item = document.createElement(elementType);
  item.textContent = content;
  return item;
}
var paragraph = contentCreator('p', 'here is some text')
var divElement = document.getElementById('content-box');
divElement.appendChild(paragraph);


1/19/21 Review

// *  Create a Pokemon constructor that creates an object with the following properties and methods
// *     - Name: String
// *     - Health Points: Number
// *     - Attack Points: Number
// *     - Abilities: Array of String
// *     - Speak: A Method that console logs the Pokemons name
// **/
function Pokemon(name, healthPoints, attackPoints, abilities, speak) {
  this.name = name;
  this.healthPoints= healthPoints;
  this.attackPoints = attackPoints;
  this.abilities = abilities;
  this.speak = function(){
    return speak(`Hello, my name is ${this.name}`);
  }
  this.speak();

}

var whittle = new Pokemon('Whittle',1500, 4000, 'run fast, backflips, chnages color');
console.log(whittle);


// User Input Functions

