/*
The eat method is repeated in both Cat and Bear. 

Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.
*/

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Animal
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Animal
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
