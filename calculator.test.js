const calculator = require('./calculator')


test('string with a single number should result in the number itself', () => {
    //will pass
    expect(calculator.add('1',1)).toBe(1);
    //will fail
    expect(calculator.add('a',1)).toBe(1);
  });