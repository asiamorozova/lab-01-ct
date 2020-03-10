const { isNumber,
        isBoolean,
        isObject,
        isArray,
        isFunction,
        isString

 } = require('./lib/types.js');

console.log(isNumber('3'));
console.log(isBoolean(true));
console.log(isObject({}));
console.log(isArray([]));
console.log(isFunction(3));
console.log(isString('hi'));


