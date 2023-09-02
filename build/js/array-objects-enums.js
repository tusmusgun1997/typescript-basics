"use strict";
// Arrays, Objects, and Enums in TypeScript
// We start with a basic TypeScript file.
// Arrays
// Defining arrays in TypeScript.
// Define three arrays: stringArray, guitars, and mixedData.
let stringArray = ["hey", "Dave"]; // An array of strings
let guitars = ["Stratocaster", "Les Paul", 5150]; // An array with a union type
let mixedData = ["evh", 1984, true]; // Another array with a union type
// TypeScript infers the types for these arrays based on their initial values.
// Accessing typescript's type inference.
// If we hover over these variables, TypeScript helps us understand their inferred types.
// stringArray: An array of strings
// guitars: An array of strings or numbers (a union type)
// mixedData: An array of strings, numbers, or booleans (a union type)
// Let's see what TypeScript thinks about these arrays.
// Attempting to assign a number to a string array element.
stringArray[0] = 42; // TypeScript error: Type 'number' is not assignable to type 'string'
// Pushing a number to a string array.
stringArray.push(42); // TypeScript error: Argument of type '42' is not assignable to parameter of type 'string'
// Adding another string to the guitars array.
guitars.push("hey"); // No TypeScript error, as the union type allows strings
// Setting the first element of guitars to a number.
guitars[0] = 1984; // No TypeScript error, as the union type allows numbers
// Adding a string to the beginning of the guitars array.
guitars.unshift("Jim"); // No TypeScript error, as the string type is allowed
// Attempting to add a boolean to the guitars array.
guitars.unshift(true); // TypeScript error: Argument of type 'true' is not assignable to parameter of type 'string' or 'number'
// Reassigning arrays
// Demonstrating how we can reassign arrays in TypeScript.
// Assigning the guitars array to the stringArray variable.
stringArray = guitars; // TypeScript error: Type 'string | number'[] is not assignable to type 'string[]'
// Assigning the stringArray to the guitars variable.
guitars = stringArray; // No TypeScript error, as the union type of guitars accepts strings
// Assigning the mixedData to the guitars variable.
guitars = mixedData; // TypeScript error: Type 'string | number | boolean'[] is not assignable to type 'string | number'[]
// Assigning the guitars array to the mixedData variable.
mixedData = guitars; // No TypeScript error, as mixedData accepts strings, numbers, or booleans
// Defining an empty array with the 'any' type.
let test = [];
// TypeScript infers the type as 'any', allowing any data type in the array.
// Defining an empty array with a specific type for its elements.
let bands = [];
// TypeScript expects this array to only contain strings.
bands.push("Van Halen"); // No TypeScript error, as it's a string
bands.push(true); // TypeScript error: Argument of type 'true' is not assignable to parameter of type 'string'
// Tuples
// Demonstrating tuples in TypeScript.
// Defining a tuple named 'myTuple' with specific element types and order.
let myTuple = ["Dave", 42, true];
// TypeScript knows the exact types and order of elements in a tuple.
// Attempting to assign 'mixed' to 'myTuple'.
myTuple = mixedData; // TypeScript error: Type 'string | number | boolean'[] is not assignable to type '[string, number, boolean]'
// Attempting to add an element to an undefined position in 'myTuple'.
myTuple[3] = 42; // TypeScript error: Type '42' is not assignable to type 'undefined'
// Objects
// Working with objects in TypeScript.
// Defining an object named 'exampleObject' with specific property types.
const exampleObject = {
    prop1: "Dave",
    prop2: true, // Property 'prop2' must be a boolean
};
// TypeScript infers the types for the properties based on their initial values.
// Attempting to assign a number to 'prop2'.
exampleObject.prop2 = 42; // TypeScript error: Type '42' is not assignable to type 'boolean'
// Creating objects of type 'guitarist'.
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["1", "2", "4"],
};
// Reassigning objects of the same type.
evh = jp; // No TypeScript error, as both objects are of type 'guitarist'
// Attempting to assign an object without the 'active' property to 'evh'.
jp = { name: "Jimmy", albums: ["1", "2", "4"] }; // TypeScript error: Property 'active' is missing
// Creating objects with an optional 'name' property.
let guitarist1 = {
    active: true,
    albums: ["1", "2"],
};
let guitarist2 = {
    name: "John",
    active: true,
    albums: [1, 2],
};
// Enums
// Working with enums in TypeScript.
// Defining an enum named 'Grade'.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
// Accessing enum values.
console.log(Grade.U); // Outputs: 0
// Changing enum values.
Grade.U = 1; // Changing the value of 'U' to 1
console.log(Grade.U); // Outputs: 1
// Enum values are automatically incremented from the first value.
console.log(Grade.B); // Outputs: 4
console.log(Grade.A); // Outputs: 5
