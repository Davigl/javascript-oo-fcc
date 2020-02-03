/*
Just like people inherit genes from their parents, an object inherits its prototype
directly from the constructor function that created it.

Use isPrototypeOf to check the prototype of beagle.
*/

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);
