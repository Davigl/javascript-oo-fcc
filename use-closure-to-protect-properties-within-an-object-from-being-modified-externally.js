/*
The simplest way to make public property private is by creating a variable within
the constructor function. 

This changes the scope of that variable to be within the constructor function 
versus available globally. 

This way, the variable can only be accessed and changed by methods also within the 
constructor function.

Change how weight is declared in the Bird function so it is a private variable.
Then, create a method getWeight that returns the value of weight 15.
*/

function Bird() {
  let weight = 15;

  this.getWeight = () => {
    return weight;
  };
}
