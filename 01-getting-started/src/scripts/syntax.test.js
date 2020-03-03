import functions from './syntax.js'

// number
test("add five to number", () => {
    expect(functions.addFive(1)).toBe(6);
    expect(functions.addFive(5)).toBe(10);
});
// string
test("Change to uppercase", () => {
    expect(functions.changeUpper("hello")).toBe("HELLO");
    expect(functions.changeUpper("bye")).toBe("BYE");
});
// boolean
test("greater than 5", () => {
    expect(functions.larger(0)).toBe(false);
    expect(functions.larger(6)).toBe(true);
});
// array
test("length of array",() => {
    expect(functions.length(["a","b","c"])).toBe(3);
    expect (functions.length(["1","2","3","4","5"])).toBe(5)
});
// dictionary / objects
