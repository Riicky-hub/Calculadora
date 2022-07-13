const soma = require('./calc');
test('The result should be eval answer', () => {
    expect(soma(2, 2)).toBe(4);
});