/*
Add all necessary code so the Dog object inherits from Animal and the Dog's prototype
constructor is set to Dog. 

Then add a bark() method to the Dog object so that beagle can both eat() and bark().

The bark() method should print "Woof!" to the console.
*/

function Animal() {}

Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = () => {
  console.log("Woof!");
};

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"
