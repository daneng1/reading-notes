
var Location = new Object(city, min, max, avg); {
  this.city = city;
  this.min = min;
  this.max = max;
  this.avg = avg; 
    var randomCust =Math.floor((Math.random(this.min * this.max)) + 1)
    this.result = randomCust
  };

var seattle = new Location('Seattle', 23, 65, 6.3);
var tokyo = new Location('Tokyo', 3, 24, 1.2);
var dubai = new Location('Dubai', 11 ,38, 3.7);
var paris = new Location('Paris', 20, 38, 2.3);
var lima = new Location('Lima', 2, 16, 4.6);

  console.log(seattle.max)




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


z