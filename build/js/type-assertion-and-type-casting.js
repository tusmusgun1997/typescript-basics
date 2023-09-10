"use strict";
// Section 1: Type Assertion (Type Casting) in TypeScript
// Section 2: Example of converting to more or less specific types using type assertion.
let a = 'hello'; // a is of type string
let b = a; // b is now of type string | number
let c = a; // c is now of type 'hello'
// You can also use angle brackets for type assertion.
let d = 'world'; // d is of type string
let e = '123'; // e is of type string | number
// Be cautious with type assertions, as you're essentially telling TypeScript
// to trust you even if it might lead to type-related errors.
// Section 3: A practical example with a function that can add or concatenate numbers or strings.
// We'll define a function that can either add or concatenate two numbers or strings
function addOrConcat(a, b, c) {
    if (c === 'add') {
        return a + b;
    }
    else {
        return '' + a + b; // Coerce to string using ''
    }
}
// Now, let's use type assertion to narrow down the return type of the function.
let myValue = addOrConcat(2, 2, 'concat'); // We know it will return a string
// Be cautious when using type assertion, as it overrides TypeScript's type checking.
// If used incorrectly, it may lead to runtime errors.
// Section 4: Type assertion with the Document Object Model (DOM).
// We'll select an image element from the DOM.
let image = document.querySelector('img'); // Inferred as HTMLImageElement | null
// If you're confident it's an image element, you can use type assertion.
image = image;
// Type assertion helps narrow down the type for safe access to properties.
let source = image.src; // Inferred as string | null
// Type guards can also be used for safer code.
if (image !== null) {
    source = image.src; // Safe access to src property
}
// Section 5: Practical example of updating the DOM.
// Assuming there's an HTML element with id "year" in the DOM.
let yearElement = document.getElementById('year'); // Inferred as HTMLElement | null
// If we're sure it's a span element, we can assert its type.
yearElement = yearElement;
// We'll update the content of the span element.
if (yearElement !== null) {
    yearElement.textContent = new Date().getFullYear().toString();
}
// By using type assertion, we can safely access and manipulate DOM elements.
