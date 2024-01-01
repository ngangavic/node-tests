const calculator = require('./calculator')


test('string with a single number should result in the number itself', () => {
    //will fail
    expect(calculator.subtract('b',1)).toBe(1);
    //will pass
    expect(calculator.subtract('1',1)).toBe(1);
  });