/*
An immediately invoked function expression (IIFE) is often used to group related
functionality into a single object or module. 

Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. 
funModule should return an object.
*/

let funModule = (() => {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => {
        return true;
      };
    },
    singMixin: obj => {
      obj.sing = () => {
        console.log("Singing to an awesome tune");
      };
    }
  };
})();
