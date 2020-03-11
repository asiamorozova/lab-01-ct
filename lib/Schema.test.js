const Schema = require('../lib/Schema');

describe('Schema', () => {
  it('validates a good schema', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number
      },
      weight: {
        type: String
      }
    });

    const dog = {
      name: 'onyx',
      age: 2,
      weight: '175 lbs'
    };

    expect(schema.validate(dog)).toEqual({
      name: 'onyx',
      age: 2,
      weight: '175 lbs'
    });
  });

  it('throws on a bad schema', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number
      },
      weight: {
        type: String
      }
    });

    const dog = {
      age: 'not a number',
      weight: '20 lbs'
    };

    expect(() => schema.validate(dog)).toThrowErrorMatchingSnapshot();
  });
});
