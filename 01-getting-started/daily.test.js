import functions from './daily.js'

test("convert to farenheit",() => {
    expect(functions.convertToFarenheit(0)).toBe(32);
    expect(functions.convertToFarenheit(10)).toBe(50);
});