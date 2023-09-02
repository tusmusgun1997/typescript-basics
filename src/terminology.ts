// TypeScript Terminology and Basic Concepts

// TypeScript can infer variable types:
let myName = "Dave"; // TypeScript infers 'myName' as a string implicitly.

// You can also explicitly specify types:
let explicitName: string = "Dave"; // Explicitly declares 'explicitName' as a string.

// TypeScript prevents type mismatches:
// Uncommenting the line below will result in an error.
// myName = 42; // Error: Type 'number' is not assignable to type 'string'.

// TypeScript can infer and enforce types for variables:
let meaningOfLife: number = 42;
let isLoading: boolean = true;

// Using 'any' type:
let album: any = "Van Halen";
album = 1984;
album = true;

// Be cautious with 'any' as it undermines TypeScript's type safety.

// Functions can also have inferred and explicit types:
function sum(a: number, b: number): number {
    return a + b;
}

// TypeScript infers the parameter types and return type.

// You can also provide explicit types for function parameters and return types.
function add(num1: number, num2: number): number {
    return num1 + num2;
}

// TypeScript helps you handle unions of types:
let postID: string | number = "123";
postID = 456;

let isActive: number | boolean = true;
isActive = 0; // Valid because 0 is treated as 'false' in JavaScript.

// Union types are useful when dealing with multiple possible data types.

// TypeScript can infer types for regular expressions:
let regex = /\w+/g; // TypeScript infers 'regex' as a RegExp type.

// However, you can explicitly specify types:
let regexExp: RegExp = /\w+/g;

// TypeScript makes it clear what types to use in your code.

// These are some basic TypeScript concepts to get you started.