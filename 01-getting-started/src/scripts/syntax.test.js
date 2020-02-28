import functions from './syntax.js'

// number
test("check that argument is number", () => {
    expect(functions.isNumber(0)).toBe("number");
});
// string
test("check that arguement is a string",() => {
    expect(functions.isString("hello")).toBe("string");
});
// boolean
test("check that arguement is boolean", () => {
    expect(functions.isBoolean(true)).toBe("boolean");
    expect(functions.isBoolean(false)).toBe("boolean");
})
// array
test("check is arguement is an array", () => {
    expect(functions.isArray())
})