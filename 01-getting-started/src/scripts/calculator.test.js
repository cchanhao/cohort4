import calcFunctions from './calculator.js';

test("test addition", () => {
    expect(calcFunctions.addNumbers(1,2)).toBe(3);
    expect(calcFunctions.addNumbers(5,10)).toBe(15);
});

test("test subraction", () => {
    expect(calcFunctions.subtractNumbers(2,1)).toBe(1);
    expect(calcFunctions.subtractNumbers(10,5)).toBe(5);
});

test("test multiplication", () => {
    expect(calcFunctions.multiplyNumbers(3,3)).toBe(9);
    expect(calcFunctions.multiplyNumbers(5,5)).toBe(25);
});

test("test division", () => {
    expect(calcFunctions.divideNumbers(10,5)).toBe(2);
    expect(calcFunctions.divideNumbers(9,3)).toBe(3);
});