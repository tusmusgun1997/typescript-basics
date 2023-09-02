// Let's start with a simple type alias for a guitarist object
type Guitarist = {
    name: string,
    active: boolean,
    albums: (string | number)[]
};

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

// Functions with explicit parameter types and return type.
function add(a: number, b: number): number {
    return a + b;
}

// Functions can also have no return type (void).
function logMessage(message: any): void {
    console.log(message);
}

// Type aliases for function signatures.
type MathFunction = (a: number, b: number) => number;

// Using type alias for function signatures.
let multiply: MathFunction = (a, b) => a * b;

// Optional parameters in functions.
function addAll(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}

// Default parameter values in functions.
function sumAll(a: number, b: number, c: number = 2): number {
    return a + b + c;
}

// Rest parameters in functions.
function total(...nums: number[]): number {
    return nums.reduce((prev, current) => prev + current, 0);
}

// Using the "never" type for a function that throws an error.
function createError(errorMessage: string): never {
    throw new Error(errorMessage);
}

// Using the "never" type for a function with an endless loop.
function infinite(): never {
    while (true) {
        // Infinite loop
    }
}

// Custom type guard for checking if a value is a number.
const isNumber = (value: any): value is number => typeof value === 'number';

// Using the custom type guard.
function createNumberOrString(value: any): string | never {
    if (isNumber(value)) {
        return 'number';
    } else {
        return createError('Invalid value: not a number');
    }
}
