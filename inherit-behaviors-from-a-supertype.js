/*
There are some disadvantages when using this syntax for inheritance,
which are too complex for the scope of this challenge. 

Instead, here's an alternative approach without those disadvantages.

Use Object.create to make two instances of Animal named duck and beagle.
*/

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"
