// Welcome to this TypeScript tutorial! In this journey, we'll explore the power of TypeScript classes and generics.

// Step 1: Define a Generic Class
// We begin by defining a generic class called StateObject.
class StateObject<T> {
  private data: T; // Private data property of generic type T

  constructor(value: T) {
    this.data = value; // Initialize data with the provided value
  }

  // Getter for state property
  get state(): T {
    return this.data; // Return the data
  }

  // Setter for state property
  set state(value: T) {
    this.data = value; // Set the data with the provided value
  }
}

// Step 2: Create an Instance
// Now, let's create an instance of StateObject with a string type.
const store = new StateObject<string>('John');
console.log(store.state); // Output: John

// Step 3: Type Safety
// TypeScript ensures type safety. Attempting to set a number to a string-based StateObject results in an error.
// store.state = 12; // Type number is not assignable to type string

// Step 4: Handling Union Types
// StateObject can handle union types as well. Here, we create an instance with a union type (string, number, boolean) array.
const myState = new StateObject<string | number | boolean>(['Dave', 42, true]);

// Step 5: Updating State
// You can set a new array to the state property.
myState.state = ['Alice', 28, false];
console.log(myState.state); // Output: ['Alice', 28, false]

// Step 6: Generic Functions
// TypeScript generics extend beyond classes. We can create generic functions.

// Step 7: Echo Function
// Here, we define a generic function 'echo' that echoes any type.
function echo<T>(argument: T): T {
  return argument;
}

const echoedString: string = echo('Hello, TypeScript!');
const echoedNumber: number = echo(42);

// Step 8: Object Check Function
// Another example of a generic function 'isObjectEmpty' that checks if an object is empty.
function isObjectEmpty<T extends object>(obj: T): boolean {
  return Object.keys(obj).length === 0;
}

const emptyObj = {};
const nonEmptyObj = { key: 'value' };

console.log(isObjectEmpty(emptyObj)); // Output: true
console.log(isObjectEmpty(nonEmptyObj)); // Output: false

// Step 9: Working with Interfaces
// Generics can work with interfaces. Here's a generic function 'processUser' to process users with specific properties.

interface User {
  id: number;
  name: string;
  email: string;
}

function processUser<T extends User>(user: T): void {
  console.log(`User ID: ${user.id}`);
  console.log(`User Name: ${user.name}`);
  console.log(`User Email: ${user.email}`);
}

const user1: User = { id: 1, name: 'Alice', email: 'alice@example.com' };
processUser(user1);

// Step 10: Extracting Properties from Objects
// Finally, we create a generic function 'getPropertyFromObjects' to get a specific property from an array of objects.

function getPropertyFromObjects<T, K extends keyof T>(objects: T[], key: K): T[K][] {
  return objects.map((obj) => obj[key]);
}

const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
];

const userEmails: string[] = getPropertyFromObjects(users, 'email');
console.log(userEmails); // Output: ['alice@example.com', 'bob@example.com']
