const { getCaster } = require('./types');

class Validator {
  // Validator takes two properties
  // field - which is the field we are going to validate
  // configuration - which gives us info about how to validate
  constructor(field, configuration) {
    this.field = field;
    this.configuration = configuration;
  }

  // obj - is the object we want to run through validation
  validate(obj) {
    // if field is required and missing
    if(this.configuration.required && !(this.field in obj)) {
      throw new Error(`Missing required field >>${this.field}<<`);
    }

    // if not required and missing
    if(!this.configuration.required && !(this.field in obj)) {
      return null;
    }
    // getCaster(String) -> castToString
    // getCaster(Number) -> castToNumber
    // getCaster(Boolean) -> castToBoolean
    const caster = getCaster(this.configuration.type);
    return caster(obj[this.field]);
  }
}

module.exports = {
  Validator
};
















// const { getCaster } = require('./types');
// //export the validator
// class Validator {
//   //these things are required
//   constructor(field, { type, required }) {
//     this.field = field;
//     this.type = type;
//     this.required = required;
//     // will need the caster we created
//     this.caster = getCaster(type);
//   }
//   //this are also required and will error if they wont work
//   validate(obj) {
//     const val = obj[this.field];
//     if(this.required && !val) throw new Error(`${this.field} is required`);
//     if(!this.required && !val) return null;
//     return this.caster(val);
//   }
// }




// const nameValidator = new Validator('name', {
//   type: String, 
//   required: true
// });

// const colorValidator = new Validator('color', {
//   type: String,
//   required: true
// });

// const milesWalkedValidator = new Validator('distance', {
//   type: Number,
//   required: true 

// });

// const dog = {
//   name: 'Seger',
//   color: 'brindle',
//   distance: '69'
// };


// console.log(nameValidator.validate(dog));
// console.log(colorValidator.validate(dog));
// console.log(milesWalkedValidator.validate(dog));
  


