// Section 1: Functions with explicit parameter types and return type.
function add(a: number, b: number): number {
    // This function takes two parameters 'a' and 'b', both of type number.
    // It returns their sum as a value of type number.
    return a + b;
}

// Section 2: Functions can also have no return type (void).
function logMessage(message: any): void {
    // This function takes a parameter 'message' of any type.
    // It logs the 'message' to the console and doesn't return any value (void).
    console.log(message);
}

// Section 3: Type aliases for function signatures.
type MathFunction = (a: number, b: number) => number;
// Here, we define a type alias 'MathFunction' that represents a function
// taking two parameters of type number and returning a value of type number.

// Section 4: Using type alias for function signatures.
let multiply: MathFunction = (a, b) => a * b;
// We create a function 'multiply' that matches the signature defined by 'MathFunction'.
// It multiplies 'a' and 'b' and returns the result as a number.

// Section 5: Optional parameters in functions.
function addAll(a: number, b: number, c?: number): number {
    // This function takes two required parameters 'a' and 'b' of type number,
    // and an optional parameter 'c' of type number.
    // If 'c' is provided, it adds all three values, otherwise, it adds only 'a' and 'b'.
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}

// Section 6: Default parameter values in functions.
function sumAll(a: number, b: number, c: number = 2): number {
    // This function takes two required parameters 'a' and 'b' of type number,
    // and an optional parameter 'c' with a default value of 2.
    // It returns the sum of 'a', 'b', and 'c'.
    return a + b + c;
}

// Section 7: Rest parameters in functions.
function total(...nums: number[]): number {
    // This function uses the rest parameter syntax '...nums' to accept
    // a variable number of arguments as an array of numbers.
    // It calculates the total sum of all the numbers in the 'nums' array.
    return nums.reduce((prev, current) => prev + current, 0);
}

// Section 8: Using the "never" type for a function that throws an error.
function createError(errorMessage: string): never {
    // This function takes an error message as a parameter and throws an Error.
    // It is annotated with the 'never' return type, indicating that it never
    // returns normally; it always throws an exception.
    throw new Error(errorMessage);
}

// Section 9: Using the "never" type for a function with an endless loop.
function infinite(): never {
    // This function contains an infinite loop.
    // It is annotated with the 'never' return type because it never exits
    // normally due to the infinite loop.
    while (true) {
        // Infinite loop
    }
}

// Section 10: Custom type guard for checking if a value is a number.
const isNumber = (value: any): boolean => typeof value === 'number';

// Section 11: Using the custom type guard.
function createNumberOrString(value: any): string | never {
    // This function takes a parameter 'value' of any type.
    // It uses the 'isNumber' custom type guard to check if 'value' is a number.
    // If it is, it returns 'number', otherwise, it calls 'createError' to throw
    // an error with the message 'Invalid value: not a number', resulting in 'never'.
    if (isNumber(value)) {
        return 'number';
    } else {
        return createError('Invalid value: not a number');
    }
}
