"use strict";
const myName = 'Dave'; // Valid assignment
let username = 'Amy'; // Valid assignment
// let username: Username = 'Rachel'; // Error: Cannot assign 'Rachel' to Username
// Functions with explicit parameter types and return type.
function add(a, b) {
    return a + b;
}
// Functions can also have no return type (void).
function logMessage(message) {
    console.log(message);
}
// Using type alias for function signatures.
let multiply = (a, b) => a * b;
// Optional parameters in functions.
function addAll(a, b, c) {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}
// Default parameter values in functions.
function sumAll(a, b, c = 2) {
    return a + b + c;
}
// Rest parameters in functions.
function total(...nums) {
    return nums.reduce((prev, current) => prev + current, 0);
}
// Using the "never" type for a function that throws an error.
function createError(errorMessage) {
    throw new Error(errorMessage);
}
// Using the "never" type for a function with an endless loop.
function infinite() {
    while (true) {
        // Infinite loop
    }
}
// Custom type guard for checking if a value is a number.
const isNumber = (value) => typeof value === 'number';
// Using the custom type guard.
function createNumberOrString(value) {
    if (isNumber(value)) {
        return 'number';
    }
    else {
        return createError('Invalid value: not a number');
    }
}
