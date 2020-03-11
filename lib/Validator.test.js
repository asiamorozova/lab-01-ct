const {Validator } = require('./Validator.js'); 

describe('Validator', () => {
  let nameValidator;
  beforeEach(() => {
    nameValidator = new Validator ('name', {
      type: String, 
      required: true
    });
  });
    
  it('has a field and configuration property', () => {
    expect(nameValidator.field).toEqual ('name');
    expect(nameValidator.configuration).toEqual({
      type: String,
      required: true
    });
  });

  it ('can validate an object with the wrong type but castable', () => {
    const dog = {
      name: '1',
      color: '45',
      distance: '56'
    };
    expect(nameValidator.validate(dog)).toEqual('1');
  });

  it('throws an error validating an object with the wrong type and not castable', () => {
    const dog = {
      name: {},
      color: 'blue',
      distance: 69,
    };
    expect(() => nameValidator.validate(dog)).toThrowError('Cannot cast >>[object Object]<< to String');
  });

  it('throws an error when validating an object with a missing required field', () => {
    const dog = {
      color: 'white',
      distance: 35,
    };
    expect(() => nameValidator.validate(dog)).toThrowError('Missing required field >>name<<');

  });
  it('throws an error when validating an object with a missing required field', () => {
    const nameValidator = new Validator ('name', {
      type: String, 
      required: false
            
    });
    const dog = {
      color: 'orange',
      distance: 13,
    };
    expect(nameValidator.validate(dog)).toEqual(null);
  });

});

