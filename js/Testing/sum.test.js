const add = require('../sum.js')

test('Returns 0 for empty string', () => {
    expect (
        add("")
    ).toBe(0)
})

test('Returns the number for 1 number passed', () => {
    expect (
        add("1")
    ).toBe(1)
})

test('Returns sum of numbers', () => {
    expect (
        add("225,75")
    ).toBe(300)
})

test('Returns incorrect format', () => {
    expect (
        add("225,abc")
    ).toBe("Incorrect input format")
})

test('Returns sum of numbers', () => {
    expect (
        add("1,2,3,4")
    ).toBe(10)
})

test('Returns sum of numbers with delimiters: , and \n', () => {
    expect (
        add("1,2,3\n4")
    ).toBe(10)
})

test('Returns sum of numbers with custom delimiter', () => {
    expect (
        add("//;\n1;2")
    ).toBe(3)
})

test('Negetive numbers are not allowed', () => {
    expect(() => {add("-1,4")}).toThrow(Error("Negetive numbers are not allowed :-1"))
})