const {nameValidator,
  colorValidator,
  milesWalkedValidator, } = require('./lib/Validator.js');


const dog = {
  name: 'Seger',
  color: 'brindle',
  distance: '69',
};

console.log(nameValidator.validate(dog));
console.log(colorValidator.validate(dog));
console.log(milesWalkedValidator.validate(dog));


// const { isNumber,
//         isBoolean,
//         isObject,
//         isArray,
//         isFunction,
//         isString

//  } = require('./lib/types.js');

// console.log(isNumber('3'));
// console.log(isBoolean(true));
// console.log(isObject({}));
// console.log(isArray([]));
// console.log(isFunction(3));
// console.log(isString('hi'));


