/*
Add a numLegs property to the prototype of Dog.

Properties in the prototype are shared among ALL instances.
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");
