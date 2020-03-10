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
    expect (functions.length(["1","2","3","4","5"])).toBe(5);
});
// dictionary / objects
test("make of vehicle", () => {
    expect(functions.carMake({make:"BMW", model:"M3", colour:"black"})).toBe("BMW");
    expect(functions.carMake({make:"Mercedes-Benz", model:"AMG63", colour:"blue"})).toBe("Mercedes-Benz");
});
// undefined
test("check if undefined", () => {
    expect(functions.undefinedChecker(10)).toBe(false);
    expect(functions.undefinedChecker(undefined)).toBe(true);
});
// add to the front
test("add to front", () => {
    expect(functions.addFront(["apples", "oranges", "mangoes"],"lemons")).toEqual(["lemons", "apples", "oranges", "mangoes"]);
    expect(functions.addFront(["USD", "JPY", "THB"],"CAD")).toEqual(["CAD", "USD", "JPY", "THB"]);
});
// add to the end
test("add to front", () => {
    expect(functions.addEnd(["apples", "oranges", "mangoes"],"lemons")).toEqual(["apples", "oranges", "mangoes", "lemons"]);
    expect(functions.addEnd(["USD", "JPY", "THB"],"CAD")).toEqual(["USD", "JPY", "THB", "CAD"]);
});
// update values
test("change first value", () => {
    expect(functions.changeValue(["toyota", "mazda", "suzuki"])).toEqual(["honda", "mazda", "suzuki"]);
    expect(functions.changeValue(["peugot", "kia", "hyundai"])).toEqual(["honda", "kia", "hyundai"]);
});
// for loop
test("loop through block", () => {
    expect(functions.forLoop([1, 2, 3, 4, 5], 1)).toEqual([2, 3, 4, 5, 6]);
    expect(functions.forLoop([10, 20, 30, 40, 50], 10)).toEqual([20, 30, 40, 50, 60]);
});
// test("get person info", () => {
//     expect(functions.inLoop()).toBe("Bruce", "Wayne", 30);
// })
