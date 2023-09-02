// Section 1: Arrays, Objects, and Enums in TypeScript
{}
[] 
enum New{
}

// Section 2: Arrays
// Defining arrays in TypeScript.

// Define three arrays: stringArray, guitars, and mixedData.
let stringArray: string[] = ["hey", "Dave"]; // An array of strings
let guitars: (string | number)[] = ["Stratocaster", "Les Paul", 5150]; // An array with a union type
let mixedData: (string | number | boolean)[] = ["evh", 1984, true]; // Another array with a union type

// TypeScript infers the types for these arrays based on their initial values.

// Accessing TypeScript's type inference.
// If we hover over these variables, TypeScript helps us understand their inferred types.

// stringArray: An array of strings
// guitars: An array of strings or numbers (a union type)
// mixedData: An array of strings, numbers, or booleans (a union type)

// Section 3: Attempting to modify array elements with incorrect types.

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

// Section 4: Reassigning arrays

// Demonstrating how we can reassign arrays in TypeScript.

// Assigning the guitars array to the stringArray variable.
stringArray = guitars; // TypeScript error: Type 'string | number'[] is not assignable to type 'string[]'

// Assigning the stringArray to the guitars variable.
guitars = stringArray; // No TypeScript error, as the union type of guitars accepts strings

// Assigning the mixedData to the guitars variable.
guitars = mixedData; // TypeScript error: Type 'string | number | boolean'[] is not assignable to type 'string | number'[]

// Assigning the guitars array to the mixedData variable.
mixedData = guitars; // No TypeScript error, as mixedData accepts strings, numbers, or booleans

// Section 5: Defining arrays with explicit types.

// Defining an empty array with the 'any' type.
let test: any[] = [];

// TypeScript infers the type as 'any', allowing any data type in the array.

// Defining an empty array with a specific type for its elements.
let bands: string[] = [];

// TypeScript expects this array to only contain strings.
bands.push("Van Halen"); // No TypeScript error, as it's a string
bands.push(true); // TypeScript error: Argument of type 'true' is not assignable to parameter of type 'string'

// Section 6: Tuples

// Demonstrating tuples in TypeScript.

// Defining a tuple named 'myTuple' with specific element types and order.
let myTuple: [string, number, boolean] = ["Dave", 42, true];

// TypeScript knows the exact types and order of elements in a tuple.

// Attempting to assign 'mixedData' to 'myTuple'.
myTuple = mixedData; // TypeScript error: Type 'string | number | boolean'[] is not assignable to type '[string, number, boolean]'

// Attempting to add an element to an undefined position in 'myTuple'.
myTuple[3] = 42; // TypeScript error: Type '42' is not assignable to type 'undefined'

// Section 7: Objects

// Working with objects in TypeScript.

// Defining an object named 'exampleObject' with specific property types.
const exampleObject = {
  prop1: "Dave", // Property 'prop1' must be a string
  prop2: true,   // Property 'prop2' must be a boolean
};

// TypeScript infers the types for the properties based on their initial values.

// Attempting to assign a number to 'prop2'.
exampleObject.prop2 = 42; // TypeScript error: Type '42' is not assignable to type 'boolean'

// Section 8: Annotating object property types using a custom type.

// Defining a custom type 'guitarist' for objects with specific properties.
type guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};

// Creating objects of type 'guitarist'.
let evh: guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150],
};

let jp: guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["1", "2", "4"],
};

// Reassigning objects of the same type.
evh = jp; // No TypeScript error, as both objects are of type 'guitarist'

// Attempting to assign an object without the 'active' property to 'evh'.
jp = { name: "Jimmy", albums: ["1", "2", "4"] }; // TypeScript error: Property 'active' is missing

// Section 9: Making properties optional.

// Making the 'name' property optional in the 'guitarist' type.
type guitaristWithOptionalName = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

// Creating objects with an optional 'name' property.
let guitarist1: guitaristWithOptionalName = {
  active: true,
  albums: ["1", "2"],
};

let guitarist2: guitaristWithOptionalName = {
  name: "John",
  active: true,
  albums: [1, 2],
};

// Section 10: Type Aliases and Literal Types

// We can create a type alias for a union of string or number.
type StringOrNumber = string | number;

// We can also create a type alias for a union of string or number as an array.
type StringOrNumberArray = StringOrNumber[];

// Now, let's use our type aliases inside another type alias.
type User = {
  userId: StringOrNumber,
  username: StringOrNumber,
};

// Literal types allow us to specify exact values.
type MyName = 'Dave';
const myName: MyName = 'Dave'; // Valid assignment
// const myName: MyName = 'John'; // Error: Cannot assign 'John' to MyName

// Literal types with union for more flexibility.
type Username = 'Dave' | 'John' | 'Amy';
let username: Username = 'Amy'; // Valid assignment
// let username: Username = 'Rachel'; // Error: Cannot assign 'Rachel' to Username

// Section 11: Enums

// Working with enums in TypeScript.

// Defining an enum named 'Grade'.
enum Grade {
  U, // Unsatisfactory
  D,
  C,
  B,
  A,
}

// Accessing enum values.
console.log(Grade.U); // Outputs: 0

// Changing enum values.
// U = 1;  Changing the value of 'U' to 1
console.log(Grade.U); // Outputs: 1

// Enum values are automatically incremented from the first value.
console.log(Grade.B); // Outputs: 4
console.log(Grade.A); // Outputs: 5
