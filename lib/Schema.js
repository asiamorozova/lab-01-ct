const {
  Validator
} = require('./Validator.js');

module.exports = class Schema {
  constructor(schema) {
    this.schema = schema;
    this.validators = Object.entries(schema)
      .map(([field, options]) => new Validator(field, options));
  }
  validate(obj) {
    const validated = {};
    const errors = [];
    this.validators
      .forEach(validator => {
        try {
          validated[validator.field] = validator.validate(obj);
        } catch(e) {
          errors.push(e);
        }
      });
    if(errors.length > 0) {
      throw new Error(`invalid schema >> ${errors}`);
    }
    return validated;
  }
};




// /* eslint-disable no-undef */
// const Validator = require('./Validator.js');
// const schema = {
//   name: {
//     type: String,
//     required: true
//   },
//   color: {
//     type: String,
//     required: true,
//   },
//   distance: {
//     type: Number,
    
//   }
// };


// //const validators = Object.entries(schema)
// //.map(([field, configuration]) => new Validator(field, configuration));

// const dog = {
//   name: 'Onyx',
//   color: 'black',
//   distance: '3',
// };
// const dogOne = {
//   name: 'Ranger',
//   color: 'black and white',
//   distance: '96',
// };
// const dogTwo = {
//   name: 'Pedro',
//   color: 'pedro',
//   distance: '1',
// };

// //const validated = {};
// //validators.forEach(validator => {
// //validated[validator.field] = validator.validate(dog);
// //});
// //console.log(validated);
// //console.log(validated(dog));
// //console.log(validated(dogOne));
// //console.log(validated(dogTwo));

// const validated = newFunction();
// function newFunction(schema, obj) {
//   const validators = Object.entries(schema)
//     .map(([field, configuration]) => new Validator(field, configuration));
//   const validated = {};
//   validators.forEach(validator => {
//     validated[validator.field] = validator.validate(obj);
//   });
//   return validated;
// }
// module.exports = {
//   newFunction
// };
