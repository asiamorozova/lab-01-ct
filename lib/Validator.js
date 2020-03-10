
const { getCaster } = require('./types');
//export the validator
class Validator {
  //these things are required
  constructor(field, { type, required }) {
    this.field = field;
    this.type = type;
    this.required = required;
    // will need the caster we created
    this.caster = getCaster(type);
  }
  //this are also required and will error if they wont work
  validate(obj) {
    const val = obj[this.field];
    if(this.required && !val) throw new Error(`${this.field} is required`);
    if(!this.required && !val) return null;
    return this.caster(val);
  }
}




const nameValidator = new Validator('name', {
  type: String, 
  required: true
});

const colorValidator = new Validator('color', {
  type: String,
  required: true
});

const milesWalkedValidator = new Validator('distance', {
  type: Number,
  required: true 

});

const dog = {
  name: 'Seger',
  color: 'brindle',
  distance: '69'
};


console.log(nameValidator.validate(dog));
console.log(colorValidator.validate(dog));
console.log(milesWalkedValidator.validate(dog));
  
module.exports = {
  nameValidator,
  colorValidator,
  milesWalkedValidator,
};

