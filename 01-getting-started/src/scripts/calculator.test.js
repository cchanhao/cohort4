import functions from './calculator.js';

test("test addition", () => {
    expect(functions.addNumbers(1,2)).toBe(3);
    expect(functions.addNumbers(5,10)).toBe(15);
});

test("test subraction", () => {
    expect(functions.subtractNumbers(2,1)).toBe(1);
    expect(functions.subtractNumbers(10,5)).toBe(5);
});

test("test multiplication", () => {
    expect(functions.multiplyNumbers(3,3)).toBe(9);
    expect(functions.multiplyNumbers(5,5)).toBe(25);
});

test("test division", () => {
    expect(functions.divideNumbers(10,5)).toBe(2);
    expect(functions.divideNumbers(9,3)).toBe(3);
});